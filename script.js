const searchInput = document.getElementById("searchInput");
const areaFilter = document.getElementById("areaFilter");
const cards = [...document.querySelectorAll(".pandal-card")];
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

function filterPandals() {
  const query = searchInput.value.trim().toLowerCase();
  const area = areaFilter.value;
  let visible = 0;
  cards.forEach(card => {
    const searchable = `${card.dataset.name} ${card.dataset.area} ${card.dataset.neighbourhood}`.toLowerCase();
    const matchesQuery = searchable.includes(query);
    const matchesArea = area === "all" || card.dataset.area === area;
    const show = matchesQuery && matchesArea;
    card.hidden = !show;
    if (show) visible++;
  });
  resultCount.textContent = `${visible} ${visible === 1 ? "LOCAL PLACE" : "LOCAL PLACES"}`;
  emptyState.hidden = visible !== 0;
}
searchInput.addEventListener("input", filterPandals);
areaFilter.addEventListener("change", filterPandals);
