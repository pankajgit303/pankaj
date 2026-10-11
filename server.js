import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = process.cwd();

const app = express();
const PORT = process.env.PORT || 3000;

function getAssetPath(filename) {
  const pDist = path.join(rootDir, 'dist', filename);
  if (fs.existsSync(pDist)) return pDist;
  const pRoot = path.join(rootDir, filename);
  if (fs.existsSync(pRoot)) return pRoot;
  const pDir = path.join(__dirname, filename);
  if (fs.existsSync(pDir)) return pDir;
  return pRoot;
}

app.use(express.static(path.join(rootDir, 'dist')));
app.use(express.static(rootDir));
app.use(express.static(__dirname));

app.get('/style.css', (req, res) => {
  res.type('text/css');
  res.sendFile(getAssetPath('style.css'));
});

app.get('/script.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(getAssetPath('script.js'));
});

app.get('*', (req, res) => {
  if (req.path.match(/\.(css|js|json|png|jpg|jpeg|svg|ico|map|woff|woff2|ttf)$/i)) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(getAssetPath('index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

export default app;
