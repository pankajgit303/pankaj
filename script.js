// Islampur Pujo Hoppers - Multi-Page Application Logic

// 27 Community Durga Pujas and Historic Mandirs in Islampur, Uttar Dinajpur
const PANDALS_DATA = [
  {
    id: 1,
    name: "Islampur Kamal Memorial Club (KMC)",
    area: "Town",
    neighbourhood: "KMC More / Old Stationpally",
    lat: 26.2672,
    lng: 88.1915,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-1",
    desc: "KMC More / Old Stationpally. Iconic town celebration with grand lighting and traditional idol."
  },
  {
    id: 2,
    name: "Deshbandhupara Adarsha Sangha",
    area: "Deshbandhupara",
    neighbourhood: "Shibdange Para West / Newtown Road",
    lat: 26.2618,
    lng: 88.1865,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-2",
    desc: "Shibdange Para West / Newtown Road. Famous for creative pandal art and festive gathering."
  },
  {
    id: 3,
    name: "Mandalpara Durga Puja Committee",
    area: "Khudirampally",
    neighbourhood: "Mandal Para, Khudirampally",
    lat: 26.2595,
    lng: 88.1940,
    tag: "LOCAL DISCOVERY",
    artClass: "card-art-3",
    desc: "Mandal Para, Khudirampally. Warm community atmosphere with cultural programs."
  },
  {
    id: 4,
    name: "Puratanpally Durga Puja",
    area: "Khudirampally",
    neighbourhood: "Puratanpally, Khudirampally",
    lat: 26.2582,
    lng: 88.1952,
    tag: "NEIGHBOURHOOD",
    artClass: "card-art-4",
    desc: "Puratanpally, Khudirampally. One of the classic neighbourhood pujas of the area."
  },
  {
    id: 5,
    name: "Amra Sabai Durgapuja Committee Puja Prangan",
    area: "Khudirampally",
    neighbourhood: "Khudirampally",
    lat: 26.2608,
    lng: 88.1965,
    tag: "PUJO TRAIL",
    artClass: "card-art-5",
    desc: "Khudirampally. Vibrant community spirit, spectacular evening lighting, and cultural events."
  },
  {
    id: 6,
    name: "Milanpally Durga Mandir",
    area: "Milanpally",
    neighbourhood: "Barhat, Islampur",
    lat: 26.2715,
    lng: 88.1880,
    tag: "TEMPLE STOP",
    artClass: "card-art-6",
    desc: "Barhat, Islampur. Historic Durga Mandir revered by devotees throughout the year."
  },
  {
    id: 7,
    name: "Nandi Bari Durga Mandir",
    area: "Majid Nagar",
    neighbourhood: "Ram Krishna Pally, Majid Nagar",
    lat: 26.2530,
    lng: 88.1855,
    tag: "TEMPLE STOP",
    artClass: "card-art-1",
    desc: "Ram Krishna Pally, Majid Nagar. Traditional family temple welcoming all visitors."
  },
  {
    id: 8,
    name: "Durga Mandir — Babupara",
    area: "Town",
    neighbourhood: "Babupara, Siliguri–Purnia Road",
    lat: 26.2655,
    lng: 88.1928,
    tag: "TEMPLE STOP",
    artClass: "card-art-2",
    desc: "Babupara, Siliguri–Purnia Road. Central location with steady footfall and serene bhog."
  },
  {
    id: 9,
    name: "Choprajhar Sarbojonin Durga Temple",
    area: "Majid Nagar",
    neighbourhood: "Majid Nagar, Islampur–Lodhan Road",
    lat: 26.2505,
    lng: 88.1820,
    tag: "TEMPLE STOP",
    artClass: "card-art-3",
    desc: "Majid Nagar, Islampur–Lodhan Road. Sarbojonin celebration with devotional ambiance."
  },
  {
    id: 10,
    name: "Khudirampally Durga Mandir",
    area: "Khudirampally",
    neighbourhood: "Khudirampally",
    lat: 26.2612,
    lng: 88.1935,
    tag: "TEMPLE STOP",
    artClass: "card-art-4",
    desc: "Khudirampally. Cherished neighbourhood temple with timeless rituals."
  },
  {
    id: 11,
    name: "Paul Bari Durga Mandir",
    area: "Deshbandhupara",
    neighbourhood: "Shibdange Para West",
    lat: 26.2625,
    lng: 88.1850,
    tag: "TEMPLE STOP",
    artClass: "card-art-5",
    desc: "Shibdange Para West. Traditional family mandir puja preserved over decades."
  },
  {
    id: 12,
    name: "Sri Sri Sarbojonin Durga Mandir",
    area: "Town",
    neighbourhood: "Teenpool, Netaji Subhash Road",
    lat: 26.2685,
    lng: 88.1895,
    tag: "TEMPLE STOP",
    artClass: "card-art-6",
    desc: "Teenpool, Netaji Subhash Road. Bustling stop near the market with lively crowd."
  },
  {
    id: 13,
    name: "Ram Krishna Pally Durga Mandir",
    area: "Majid Nagar",
    neighbourhood: "Ram Krishna Pally, Majid Nagar",
    lat: 26.2542,
    lng: 88.1868,
    tag: "TEMPLE STOP",
    artClass: "card-art-1",
    desc: "Ram Krishna Pally, Majid Nagar. Warm local committee puja with festive sound of dhak."
  },
  {
    id: 14,
    name: "Adi Maa Durga Temple",
    area: "Town",
    neighbourhood: "Narayanpur, Islampur",
    lat: 26.2730,
    lng: 88.1945,
    tag: "TEMPLE STOP",
    artClass: "card-art-2",
    desc: "Narayanpur, Islampur. One of the oldest venerated mandirs in northern Islampur."
  },
  {
    id: 15,
    name: "Ma Durga and Ma Kali Mandir",
    area: "Town",
    neighbourhood: "Molnapara, Lokenath Road",
    lat: 26.2638,
    lng: 88.1980,
    tag: "TEMPLE STOP",
    artClass: "card-art-3",
    desc: "Molnapara, Lokenath Road. Combined temple offering a spiritually rich experience."
  },
  {
    id: 16,
    name: "Durga Mandir — Bolhanja",
    area: "Town",
    neighbourhood: "Bolhanja, Patagora Road",
    lat: 26.2760,
    lng: 88.1840,
    tag: "TEMPLE STOP",
    artClass: "card-art-4",
    desc: "Bolhanja, Patagora Road. Peaceful stop on the Patagora corridor."
  },
  {
    id: 17,
    name: "Charkhamba Sarbajanin Durga Temple",
    area: "Town",
    neighbourhood: "Charkhamba, Islampur–Lodhan Road",
    lat: 26.2480,
    lng: 88.1790,
    tag: "TEMPLE STOP",
    artClass: "card-art-5",
    desc: "Charkhamba, Islampur–Lodhan Road. Deep-rooted celebration loved by nearby residents."
  },
  {
    id: 18,
    name: "Shiv Kali Nav Durga Mandir",
    area: "Town",
    neighbourhood: "Durga Nagar, Siliguri–Purnia Road",
    lat: 26.2690,
    lng: 88.1970,
    tag: "TEMPLE STOP",
    artClass: "card-art-6",
    desc: "Durga Nagar, Siliguri–Purnia Road. Prominent shrine featuring all nine avatars of Durga."
  },
  {
    id: 19,
    name: "Netajipally & Blockpara Sarbojonin Durga Puja Committee",
    area: "Netajipally",
    neighbourhood: "Netajipally",
    lat: 26.2600,
    lng: 88.1785,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-1",
    desc: "Netajipally. Massive crowd favorite featuring artistic pandal concepts."
  },
  {
    id: 20,
    name: "Royal Sporting Club",
    area: "Town",
    neighbourhood: "Thana Colony",
    lat: 26.2660,
    lng: 88.1860,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-2",
    desc: "Thana Colony. Renowned for innovative illumination gates and cultural performances."
  },
  {
    id: 21,
    name: "Islampur Tarun Sangha",
    area: "Town",
    neighbourhood: "Power Housepara",
    lat: 26.2640,
    lng: 88.1830,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-3",
    desc: "Power Housepara. Energetic youth club organizing grand celebrations and anjali."
  },
  {
    id: 22,
    name: "Agragami Sangha",
    area: "Milanpally",
    neighbourhood: "Milanpally",
    lat: 26.2725,
    lng: 88.1895,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-4",
    desc: "Milanpally. Delightful local pandal with traditional dhunuchi naach and aarti."
  },
  {
    id: 23,
    name: "Agrodoot Sangha",
    area: "Town",
    neighbourhood: "Collegemore",
    lat: 26.2700,
    lng: 88.1930,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-5",
    desc: "Collegemore. Bustling crossroads venue with vibrant food stalls and lighting."
  },
  {
    id: 24,
    name: "Ashrampara Durga Puja Committee",
    area: "Town",
    neighbourhood: "Ashrampara",
    lat: 26.2678,
    lng: 88.1840,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-6",
    desc: "Ashrampara. Serene pandal with melodious stotras and traditional decoration."
  },
  {
    id: 25,
    name: "Mukti Sangha",
    area: "Milanpally",
    neighbourhood: "Milan Pally",
    lat: 26.2708,
    lng: 88.1872,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-1",
    desc: "Milan Pally. Long-standing club famous for grand idol presentation and community bhog."
  },
  {
    id: 26,
    name: "Netajee Sangha Durga Puja",
    area: "Netajipally",
    neighbourhood: "Islampur",
    lat: 26.2588,
    lng: 88.1770,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-2",
    desc: "Netajipally, Islampur. Popular community landmark attracting hoppers from across town."
  },
  {
    id: 27,
    name: "New Town Durga Puja",
    area: "Deshbandhupara",
    neighbourhood: "New Town, Islampur",
    lat: 26.2632,
    lng: 88.1885,
    tag: "COMMUNITY PUJO",
    artClass: "card-art-3",
    desc: "New Town, Islampur. Lively neighborhood celebration with warm hospitality."
  }
];

// Landmark reference coordinates for simulated location
const LANDMARKS = {
  "kmc": { name: "KMC More", lat: 26.2672, lng: 88.1915 },
  "teenpool": { name: "Teenpool / NS Road", lat: 26.2685, lng: 88.1895 },
  "collegemore": { name: "Collegemore", lat: 26.2700, lng: 88.1930 },
  "khudirampally": { name: "Khudirampally More", lat: 26.2605, lng: 88.1950 },
  "milanpally": { name: "Milanpally", lat: 26.2715, lng: 88.1880 },
  "deshbandhupara": { name: "Deshbandhupara", lat: 26.2620, lng: 88.1860 },
  "majidnagar": { name: "Majid Nagar", lat: 26.2520, lng: 88.1840 }
};

// Curated Route Presets
const PRESET_ROUTES = {
  heritage: {
    title: "Town Heritage Trail",
    ids: [1, 12, 8, 20, 23]
  },
  khudirampally: {
    title: "Khudirampally Circuit",
    ids: [5, 3, 4, 10, 27]
  },
  milanpally: {
    title: "Milanpally Loop",
    ids: [6, 25, 22, 9, 13]
  },
  express: {
    title: "Grand Islampur Express",
    ids: [1, 23, 22, 2, 19, 5]
  }
};

// Global App State
let activePage = "home";
let userLocation = { ...LANDMARKS.kmc, isGPS: false };
let selectedRouteIds = JSON.parse(localStorage.getItem("islampur_route_stops") || "[1, 12, 8, 20]");
let leafletMap = null;
let mapMarkers = [];
let userLocationMarker = null;
let userAccuracyCircle = null;
let activeMapFilter = "all";
let activeNearDistanceFilter = "all";
<<<<<<< HEAD
let gpsWatchId = null;    // watchPosition continuous tracking ID
let gpsFirstFix = true;   // fly-to map only on first GPS fix
=======
>>>>>>> origin/main

// Distance Calculator using Haversine formula
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatDistance(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

function estimateWalkTime(km) {
  const mins = Math.round((km / 4.8) * 60);
  return mins < 1 ? "1 min" : `${mins} mins`;
}

function estimateRideTime(km) {
  const mins = Math.round((km / 20) * 60);
  return mins < 2 ? "2 mins" : `${mins} mins`;
}

// Toast Notification
function showToast(msg) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ==========================================
// Page Routing
// ==========================================
function navigateToPage(pageName) {
  const validPages = ["home", "map", "near-me", "route"];
  if (!validPages.includes(pageName)) {
    pageName = "home";
  }
  activePage = pageName;

  // Toggle page sections
  document.querySelectorAll(".app-page").forEach(page => {
    if (page.id === `page-${pageName}`) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  // Update nav link active states
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Sync window hash
  if (window.location.hash !== `#${pageName}`) {
    history.replaceState(null, null, `#${pageName}`);
  }

  // Page specific hooks
  if (pageName === "map") {
    setTimeout(initOrRefreshMap, 150);
  } else if (pageName === "near-me") {
    renderNearMeList();
  } else if (pageName === "route") {
    renderRouteWorkspace();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Sync route counters across UI badges
function updateRouteCounters() {
  const count = selectedRouteIds.length;
  const headerCount = document.getElementById("headerRouteCount");
  const mobileCount = document.getElementById("mobileRouteCount");
  if (headerCount) headerCount.textContent = count;
  if (mobileCount) mobileCount.textContent = count;

  // Save to localStorage
  localStorage.setItem("islampur_route_stops", JSON.stringify(selectedRouteIds));

  // Update card button states in explore
  document.querySelectorAll(".btn-toggle-route").forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    const inRoute = selectedRouteIds.includes(id);
    if (inRoute) {
      btn.classList.add("in-route");
      btn.textContent = "✓ In Route";
    } else {
      btn.classList.remove("in-route");
      btn.textContent = "+ Add to Route";
    }
  });
}

function togglePandalInRoute(pandalId) {
  const id = typeof pandalId === "number" ? pandalId : parseInt(pandalId, 10);
  const index = selectedRouteIds.indexOf(id);
  const pandal = PANDALS_DATA.find(p => p.id === id);
  const name = pandal ? pandal.name : `Pandal #${id}`;

  if (index >= 0) {
    selectedRouteIds.splice(index, 1);
    showToast(`Removed from route: ${name}`);
  } else {
    selectedRouteIds.push(id);
    showToast(`Added to route: ${name}`);
  }
  updateRouteCounters();

  if (activePage === "route") {
    renderRouteWorkspace();
  }
}

// ==========================================
// Map Page Implementation
// ==========================================
function initOrRefreshMap() {
  const mapContainer = document.getElementById("leaflet-map");
  if (!mapContainer) return;

  if (!leafletMap && typeof L !== "undefined") {
    leafletMap = L.map("leaflet-map").setView([26.2644, 88.1901], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    renderMapMarkers();

    if (userLocation.isGPS) {
      updateUserLocationOnMap(userLocation.lat, userLocation.lng, userLocation.accuracy || 20, false);
    }
  } else if (leafletMap) {
    leafletMap.invalidateSize();
    if (userLocation.isGPS) {
      updateUserLocationOnMap(userLocation.lat, userLocation.lng, userLocation.accuracy || 20, false);
    }
  }
}

function renderMapMarkers() {
  if (!leafletMap || typeof L === "undefined") return;

  // Clear existing markers
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  const bounds = [];

  PANDALS_DATA.forEach(p => {
    if (activeMapFilter !== "all" && p.area !== activeMapFilter) {
      return;
    }

    bounds.push([p.lat, p.lng]);

    const customIcon = L.divIcon({
      className: "custom-pujo-pin",
      html: `
        <div class="pujo-marker" id="marker-${p.id}">
          <div class="pujo-marker-pin">
            <span class="pujo-marker-text">${p.id}</span>
          </div>
        </div>
      `,
      iconSize: [32, 38],
      iconAnchor: [16, 36],
      popupAnchor: [0, -36]
    });

    const popupHtml = `
      <div class="pandal-popup">
        <div class="popup-tag">${p.tag} · ${p.area}</div>
        <h4 class="popup-title">${p.name}</h4>
        <div class="popup-loc">📍 ${p.neighbourhood}</div>
        <div class="popup-actions">
          <a class="popup-btn popup-btn-primary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Islampur')}">Directions ↗</a>
          <button class="popup-btn popup-btn-secondary" onclick="togglePandalInRoute(${p.id})">Add to Route</button>
        </div>
      </div>
    `;

    const marker = L.marker([p.lat, p.lng], { icon: customIcon })
      .bindPopup(popupHtml)
      .addTo(leafletMap);

    marker._pandalId = p.id;
    mapMarkers.push(marker);
  });

  if (bounds.length > 0 && activeMapFilter !== "all") {
    leafletMap.fitBounds(bounds, { padding: [40, 40] });
  }

  renderMapDrawerList();
}

function focusMapOnPandal(id) {
  const pandal = PANDALS_DATA.find(p => p.id === id);
  if (!pandal) return;

  navigateToPage("map");

  setTimeout(() => {
    if (leafletMap) {
      leafletMap.setView([pandal.lat, pandal.lng], 16, { animate: true });
      const marker = mapMarkers.find(m => m._pandalId === id);
      if (marker) {
        marker.openPopup();
      }
    }
  }, 200);
}

function renderMapDrawerList() {
  const container = document.getElementById("mapDrawerList");
  if (!container) return;

  const filtered = PANDALS_DATA.filter(p => activeMapFilter === "all" || p.area === activeMapFilter);

  container.innerHTML = filtered.map(p => `
    <div class="mini-pandal-card">
      <div>
        <div class="mini-card-top">
          <span class="card-area">${p.area.toUpperCase()}</span>
          <span class="pandal-num">#${p.id < 10 ? '0' + p.id : p.id}</span>
        </div>
        <h4>${p.name}</h4>
        <p>📍 ${p.neighbourhood}</p>
      </div>
      <div class="mini-card-actions">
        <button class="btn-card-action" onclick="focusMapOnPandal(${p.id})">📍 View on Map</button>
        <button class="btn-card-action btn-toggle-route ${selectedRouteIds.includes(p.id) ? 'in-route' : ''}" data-id="${p.id}" onclick="togglePandalInRoute(${p.id})">
          ${selectedRouteIds.includes(p.id) ? '✓ In Route' : '+ Route'}
        </button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// Near Me Implementation
// ==========================================
function renderNearMeList() {
  const container = document.getElementById("nearMeList");
  const countEl = document.getElementById("nearCount");
  if (!container) return;

  // Calculate distance from userLocation to each pandal
  const withDistance = PANDALS_DATA.map(p => {
    const dist = calculateDistanceKm(userLocation.lat, userLocation.lng, p.lat, p.lng);
    return { ...p, dist };
  });

  // Sort by distance ascending
  withDistance.sort((a, b) => a.dist - b.dist);

  // Apply distance filter
  let filtered = withDistance;
  if (activeNearDistanceFilter === "500m") {
    filtered = withDistance.filter(p => p.dist <= 0.5);
  } else if (activeNearDistanceFilter === "1km") {
    filtered = withDistance.filter(p => p.dist <= 1.0);
  } else if (activeNearDistanceFilter === "2km") {
    filtered = withDistance.filter(p => p.dist <= 2.0);
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} PANDALS FOUND`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        No pandals found within this distance radius. Try expanding the range to 1 km or 2 km.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const inRoute = selectedRouteIds.includes(p.id);
    const distText = formatDistance(p.dist);
    const walkText = estimateWalkTime(p.dist);
    const rideText = estimateRideTime(p.dist);

    return `
      <div class="near-card">
        <div class="distance-indicator">
          <span class="dist-value">${distText}</span>
          <span class="dist-label">AWAY</span>
        </div>
        <div class="near-main">
          <div class="near-tag-row">
            <span class="near-tag">${p.area.toUpperCase()}</span>
            <span class="near-time-badge">🚶 ~${walkText}</span>
            <span class="near-time-badge" style="background:#fcf1de; color:#85550c;">🛺 ~${rideText}</span>
          </div>
          <h3 class="near-title">${p.name}</h3>
          <p class="near-loc">📍 ${p.neighbourhood}</p>
        </div>
        <div class="near-actions">
          <button class="button button-ghost" style="padding:10px 14px; font-size:11px; color:var(--ink); border-color:#d7cbbf;" onclick="focusMapOnPandal(${p.id})">Map 📍</button>
          <a class="button button-primary" style="padding:10px 14px; font-size:11px;" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&query=${encodeURIComponent(p.name + ' Islampur')}">Directions ↗</a>
          <button class="button button-gold btn-toggle-route ${inRoute ? 'in-route' : ''}" style="padding:10px 14px; font-size:11px;" data-id="${p.id}" onclick="togglePandalInRoute(${p.id})">
            ${inRoute ? '✓ In Route' : '+ Add Route'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function updateUserLocationOnMap(lat, lng, accuracy = 20, panToUser = true) {
  if (!leafletMap || typeof L === "undefined") return;

  // Find nearest pandal to current coordinates
  let nearestPandal = null;
  let nearestDist = Infinity;
  PANDALS_DATA.forEach(p => {
    const d = calculateDistanceKm(lat, lng, p.lat, p.lng);
    if (d < nearestDist) {
      nearestDist = d;
      nearestPandal = p;
    }
  });

  const customUserIcon = L.divIcon({
    className: "custom-user-gps-icon",
    html: `
      <div class="user-gps-beacon">
        <div class="gps-ripple"></div>
        <div class="gps-dot"></div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  });

  const popupHtml = `
    <div class="user-gps-popup">
      <div class="user-gps-popup-title">📍 Your Live Position</div>
      <div class="user-gps-popup-acc">GPS Accuracy: ±${Math.round(accuracy)}m</div>
      ${nearestPandal ? `
        <div class="user-gps-nearest-box">
          <b>Nearest Pandal:</b><br>
          ${nearestPandal.name}<br>
          <span style="color:#2e7d32; font-weight:700;">${formatDistance(nearestDist)} away</span> (~${estimateWalkTime(nearestDist)} walk)
        </div>
        <button class="popup-btn popup-btn-primary" style="width:100%;" onclick="focusMapOnPandal(${nearestPandal.id})">
          Zoom to ${nearestPandal.name} ↗
        </button>
      ` : ''}
    </div>
  `;

  if (userLocationMarker) {
    userLocationMarker.setLatLng([lat, lng]);
    userLocationMarker.setPopupContent(popupHtml);
  } else {
    userLocationMarker = L.marker([lat, lng], {
      icon: customUserIcon,
      zIndexOffset: 1200
    }).bindPopup(popupHtml).addTo(leafletMap);
  }

  if (userAccuracyCircle) {
    userAccuracyCircle.setLatLng([lat, lng]);
    userAccuracyCircle.setRadius(Math.max(accuracy, 15));
  } else {
    userAccuracyCircle = L.circle([lat, lng], {
      radius: Math.max(accuracy, 15),
      color: "#1976d2",
      fillColor: "#1976d2",
      fillOpacity: 0.12,
      weight: 1.5
    }).addTo(leafletMap);
  }

  if (panToUser) {
    leafletMap.flyTo([lat, lng], 16, { animate: true, duration: 1.2 });
    setTimeout(() => {
      if (userLocationMarker) userLocationMarker.openPopup();
    }, 1250);
  }

  // Update on-map live banner
  const banner = document.getElementById("mapGpsBanner");
  const bannerText = document.getElementById("mapGpsBannerText");
  if (banner && bannerText) {
    banner.hidden = false;
    bannerText.innerHTML = `<b>GPS Active:</b> Located on map (±${Math.round(accuracy)}m) ${nearestPandal ? `· Nearest: <b>${nearestPandal.name}</b> (${formatDistance(nearestDist)})` : ''}`;
  }
}

function closeMapGpsBanner() {
  const banner = document.getElementById("mapGpsBanner");
  if (banner) banner.hidden = true;
}

<<<<<<< HEAD

// ==========================================
// GPS / Live Location
// ==========================================

/**
 * Set GPS UI buttons to "locating" state
 */
function setGpsButtonsLocating(on) {
  const mapLocateBtn = document.getElementById("btnMapLocate");
  const floatBtn     = document.getElementById("mapFloatGpsBtn");
  const nearBtn      = document.getElementById("btnGpsLocate");

  if (on) {
    if (mapLocateBtn) { mapLocateBtn.innerHTML = `<span>⏳</span> Locating…`; mapLocateBtn.style.opacity = "0.75"; }
    if (floatBtn)     floatBtn.classList.add("locating");
    if (nearBtn)      { nearBtn.innerHTML = `<span>⏳</span> Getting GPS…`; nearBtn.style.opacity = "0.75"; }
  } else {
    if (mapLocateBtn) { mapLocateBtn.innerHTML = `<span>🎯</span> Live GPS ON`; mapLocateBtn.style.opacity = "1"; }
    if (floatBtn)     floatBtn.classList.remove("locating");
    if (nearBtn)      { nearBtn.innerHTML = `<span>🎯</span> Live GPS ON`; nearBtn.style.opacity = "1"; }
  }
}

/**
 * Reset GPS buttons to default state (no active watch)
 */
function resetGpsButtons() {
  const mapLocateBtn = document.getElementById("btnMapLocate");
  const floatBtn     = document.getElementById("mapFloatGpsBtn");
  const nearBtn      = document.getElementById("btnGpsLocate");
  if (mapLocateBtn) { mapLocateBtn.innerHTML = `<span>📍</span> Locate Me (GPS)`; mapLocateBtn.style.opacity = "1"; }
  if (floatBtn)     floatBtn.classList.remove("locating");
  if (nearBtn)      { nearBtn.innerHTML = `<span>🎯</span> Use My GPS Location`; nearBtn.style.opacity = "1"; }
}

/**
 * Start continuous GPS watching (watchPosition).
 * Called by both Map page and Near Me page GPS buttons.
 */
function startGpsWatch() {
  if (!navigator.geolocation) {
    showToast("❌ Geolocation is not supported by your browser.");
    return;
  }

  // Stop any existing watch first
  stopGpsWatch();

  setGpsButtonsLocating(true);
  gpsFirstFix = true;

  gpsWatchId = navigator.geolocation.watchPosition(
    position => {
      const lat      = position.coords.latitude;
      const lng      = position.coords.longitude;
      const accuracy = position.coords.accuracy || 20;

      userLocation = { name: "My Live GPS Location", lat, lng, accuracy, isGPS: true };

      setGpsButtonsLocating(false);

      // --- Update Map (if initialized) ---
      if (leafletMap) {
        updateUserLocationOnMap(lat, lng, accuracy, gpsFirstFix);
      }

      // --- Update Near Me ---
      const badge = document.getElementById("locationBadge");
      if (badge) {
        badge.innerHTML =
          `<span class="dot" style="background:#2e7d32;"></span>` +
          `📡 GPS Live · ±${Math.round(accuracy)}m (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
      }

      // Deactivate landmark chips since GPS is now active
      document.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));

      // Re-render Near Me distances from real location
      if (activePage === "near-me") renderNearMeList();

      if (gpsFirstFix) {
        showToast("📍 Live GPS active! Distances updating in real time.");
        gpsFirstFix = false;
      }
    },
    error => {
      resetGpsButtons();
      stopGpsWatch();

      let msg;
      switch (error.code) {
        case 1: // PERMISSION_DENIED
          msg = "🚫 Location permission denied. Please allow location in your browser / device settings, then try again.";
          break;
        case 2: // POSITION_UNAVAILABLE
          msg = "📡 GPS signal unavailable. Make sure you're outdoors or have location services enabled.";
          break;
        case 3: // TIMEOUT
          msg = "⏱️ GPS timed out. Please try again in an open area for a better signal.";
          break;
        default:
          msg = "❌ Could not get your location. Please check your browser permissions.";
      }

      showToast(msg);

      // Update Near Me badge to reflect the failure
      const badge = document.getElementById("locationBadge");
      if (badge) {
        badge.innerHTML = `<span class="dot" style="background:#d74335;"></span> GPS failed — using landmark`;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    }
  );
}

/**
 * Stop any active GPS watch
 */
function stopGpsWatch() {
  if (gpsWatchId !== null) {
    navigator.geolocation.clearWatch(gpsWatchId);
    gpsWatchId = null;
  }
}

/**
 * Toggle GPS: start if off, stop if already watching
 */
function toggleGps() {
  if (gpsWatchId !== null) {
    // Already watching → stop
    stopGpsWatch();
    resetGpsButtons();
    userLocation = { ...LANDMARKS.kmc, isGPS: false };
    showToast("GPS tracking stopped.");
    const badge = document.getElementById("locationBadge");
    if (badge) {
      badge.innerHTML = `<span class="dot"></span> Simulating from KMC More, Islampur`;
    }
    // Re-render Near Me with landmark
    if (activePage === "near-me") renderNearMeList();
  } else {
    startGpsWatch();
    // If user clicked from Map page, navigate there so the dot appears
    if (activePage !== "map" && activePage !== "near-me") {
      navigateToPage("map");
    }
  }
}

/**
 * Legacy compat: locateUserOnMap still works for direct map page GPS button
 */
function locateUserOnMap(panToUser = true) {
  gpsFirstFix = panToUser;
  startGpsWatch();
}

/**
 * handleGpsLocate: Near Me page GPS button handler
 * Starts live GPS and stays on Near Me page
 */
function handleGpsLocate() {
  startGpsWatch();
}



=======
function locateUserOnMap(panToUser = true) {
  const mapLocateBtn = document.getElementById("btnMapLocate");
  const floatBtn = document.getElementById("mapFloatGpsBtn");

  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser");
    return;
  }

  if (mapLocateBtn) {
    mapLocateBtn.innerHTML = `<span>⏳</span> Locating...`;
    mapLocateBtn.style.opacity = "0.75";
  }
  if (floatBtn) {
    floatBtn.classList.add("locating");
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy || 20;

      userLocation = {
        name: "My Live GPS Location",
        lat,
        lng,
        accuracy,
        isGPS: true
      };

      if (mapLocateBtn) {
        mapLocateBtn.innerHTML = `<span>✓</span> Located (GPS)`;
        mapLocateBtn.style.opacity = "1";
      }
      if (floatBtn) {
        floatBtn.classList.remove("locating");
      }

      // Plot & center on Leaflet map
      updateUserLocationOnMap(lat, lng, accuracy, panToUser);

      // Also sync Near Me page
      const badge = document.getElementById("locationBadge");
      if (badge) {
        badge.innerHTML = `<span class="dot" style="background:#2e7d32;"></span> GPS Active (${lat.toFixed(3)}, ${lng.toFixed(3)})`;
      }
      document.querySelectorAll(".chip-btn").forEach(btn => btn.classList.remove("active"));
      renderNearMeList();

      showToast("📍 Current GPS position located on map!");
    },
    error => {
      console.warn("GPS error:", error);
      if (mapLocateBtn) {
        mapLocateBtn.innerHTML = `<span>📍</span> Locate Me (GPS)`;
        mapLocateBtn.style.opacity = "1";
      }
      if (floatBtn) {
        floatBtn.classList.remove("locating");
      }

      let errorMsg = "Unable to fetch GPS. Showing Islampur central view.";
      if (error.code === 1) {
        errorMsg = "Location access was denied. Please allow location permissions in your browser.";
      }
      showToast(errorMsg);

      // Default fallback marker for testing in restricted environments
      updateUserLocationOnMap(26.2644, 88.1901, 35, panToUser);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function handleGpsLocate() {
  locateUserOnMap(false);
}

>>>>>>> origin/main
// ==========================================
// Route Page Implementation
// ==========================================
function renderRouteWorkspace() {
  const stopsListContainer = document.getElementById("routeStopsList");
  const availableContainer = document.getElementById("availablePandalsList");
  const stopCountEl = document.getElementById("routeStopCount");
  const totalDistEl = document.getElementById("routeTotalDist");
  const estTimeEl = document.getElementById("routeEstTime");

  const selectedPandals = selectedRouteIds.map(id => PANDALS_DATA.find(p => p.id === id)).filter(Boolean);

  // Compute total route distance
  let totalKm = 0;
  for (let i = 0; i < selectedPandals.length - 1; i++) {
    totalKm += calculateDistanceKm(
      selectedPandals[i].lat, selectedPandals[i].lng,
      selectedPandals[i + 1].lat, selectedPandals[i + 1].lng
    );
  }

  // Estimate total hopping time:
  // (Travel time at ~15km/h in festive traffic) + (18 mins average darshan & food stop per pandal)
  const travelMins = Math.round((totalKm / 15) * 60);
  const darshanMins = selectedPandals.length * 18;
  const totalMins = travelMins + darshanMins;
  const hours = Math.floor(totalMins / 60);
  const remainingMins = totalMins % 60;
  const timeStr = hours > 0 ? `${hours}h ${remainingMins}m` : `${remainingMins} mins`;

  if (stopCountEl) stopCountEl.textContent = `${selectedPandals.length}`;
  if (totalDistEl) totalDistEl.textContent = totalKm > 0 ? `${totalKm.toFixed(1)} km` : "0 km";
  if (estTimeEl) estTimeEl.textContent = selectedPandals.length > 0 ? timeStr : "0 min";

  // Render ordered stops
  if (stopsListContainer) {
    if (selectedPandals.length === 0) {
      stopsListContainer.innerHTML = `
        <div class="empty-state" style="padding:30px;">
          Your route is currently empty.<br>Choose a curated trail above or add pandals from the list on the right!
        </div>
      `;
    } else {
      stopsListContainer.innerHTML = selectedPandals.map((p, idx) => `
        <div class="stop-item">
          <div class="stop-order">${idx + 1}</div>
          <div class="stop-details">
            <h4>${p.name}</h4>
            <p>📍 ${p.neighbourhood}</p>
          </div>
          <div class="stop-tools">
            <button class="btn-icon" title="Move Up" onclick="reorderStop(${p.id}, -1)">▲</button>
            <button class="btn-icon" title="Move Down" onclick="reorderStop(${p.id}, 1)">▼</button>
            <button class="btn-icon" title="Remove" style="color:var(--red);" onclick="togglePandalInRoute(${p.id})">✕</button>
          </div>
        </div>
      `).join("");
    }
  }

  // Render available checklist
  if (availableContainer) {
    availableContainer.innerHTML = PANDALS_DATA.map(p => {
      const isSelected = selectedRouteIds.includes(p.id);
      return `
        <div class="available-item">
          <div class="avail-info">
            <h5>${p.id}. ${p.name}</h5>
            <span>${p.area} · ${p.neighbourhood}</span>
          </div>
          <button class="btn-card-action ${isSelected ? 'in-route' : ''}" style="flex:none; min-width:80px;" onclick="togglePandalInRoute(${p.id})">
            ${isSelected ? '✓ In Route' : '+ Add'}
          </button>
        </div>
      `;
    }).join("");
  }
}

function reorderStop(id, delta) {
  const index = selectedRouteIds.indexOf(id);
  if (index === -1) return;
  const newIndex = index + delta;
  if (newIndex < 0 || newIndex >= selectedRouteIds.length) return;

  const temp = selectedRouteIds[index];
  selectedRouteIds[index] = selectedRouteIds[newIndex];
  selectedRouteIds[newIndex] = temp;

  updateRouteCounters();
  renderRouteWorkspace();
}

function loadPresetRoute(presetKey) {
  const preset = PRESET_ROUTES[presetKey];
  if (!preset) return;

  selectedRouteIds = [...preset.ids];
  updateRouteCounters();
  renderRouteWorkspace();
  showToast(`Loaded ${preset.title} (${preset.ids.length} stops)`);
}

function clearEntireRoute() {
  if (selectedRouteIds.length === 0) return;
  selectedRouteIds = [];
  updateRouteCounters();
  renderRouteWorkspace();
  showToast("Cleared all stops from route");
}

function openRouteInGoogleMaps() {
  if (selectedRouteIds.length === 0) {
    showToast("Please add at least 1 pandal to your route first!");
    return;
  }

  const selectedPandals = selectedRouteIds.map(id => PANDALS_DATA.find(p => p.id === id)).filter(Boolean);

  if (selectedPandals.length === 1) {
    const p = selectedPandals[0];
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&query=${encodeURIComponent(p.name + ' Islampur')}`, "_blank");
    return;
  }

  const origin = `${selectedPandals[0].lat},${selectedPandals[0].lng}`;
  const destination = `${selectedPandals[selectedPandals.length - 1].lat},${selectedPandals[selectedPandals.length - 1].lng}`;

  let waypointsParam = "";
  if (selectedPandals.length > 2) {
    const waypoints = selectedPandals.slice(1, selectedPandals.length - 1).map(p => `${p.lat},${p.lng}`);
    waypointsParam = `&waypoints=${waypoints.join("|")}`;
  }

  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointsParam}&travelmode=driving`;
  window.open(url, "_blank");
}

function shareRouteSummary() {
  if (selectedRouteIds.length === 0) {
    showToast("Route is currently empty!");
    return;
  }

  const selectedPandals = selectedRouteIds.map((id, i) => {
    const p = PANDALS_DATA.find(item => item.id === id);
    return `${i + 1}. ${p ? p.name : 'Stop ' + id}`;
  });

  const text = `🌸 My Islampur PujoParikrama Itinerary (${selectedRouteIds.length} stops):\n${selectedPandals.join("\n")}\n\nPlan your Durga Puja route on Islampur PujoParikrama (Made by Pankaj Singha: https://pankajportfolioo.vercel.app/)!`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Route summary copied to clipboard! Ready to share with friends.");
    }).catch(() => {
      showToast("Route summary ready!");
    });
  } else {
    showToast("Route summary generated!");
  }
}

// ==========================================
// Home Explore Pandals Filter & Search
// ==========================================
function filterHomePandals() {
  const searchInput = document.getElementById("searchInput");
  const areaFilter = document.getElementById("areaFilter");
  const cards = document.querySelectorAll(".pandal-card");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  if (!searchInput || !areaFilter) return;

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

  if (resultCount) {
    resultCount.textContent = `${visible} ${visible === 1 ? "LOCAL PLACE" : "LOCAL PLACES"}`;
  }
  if (emptyState) {
    emptyState.hidden = visible !== 0;
  }
}

// ==========================================
// Initialization & Event Binding
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Hash routing
  const initialHash = window.location.hash.replace("#", "") || "home";
  navigateToPage(initialHash);

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "") || "home";
    navigateToPage(hash);
  });

  // Nav click handlers
  document.querySelectorAll("[data-page]").forEach(elem => {
    elem.addEventListener("click", e => {
      e.preventDefault();
      const target = elem.dataset.page;
      navigateToPage(target);
    });
  });

  // Home search listeners
  const searchInput = document.getElementById("searchInput");
  const areaFilter = document.getElementById("areaFilter");
  if (searchInput) searchInput.addEventListener("input", filterHomePandals);
  if (areaFilter) areaFilter.addEventListener("change", filterHomePandals);

  // Map pill filters
  document.querySelectorAll(".map-pills .filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".map-pills .filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeMapFilter = pill.dataset.area || "all";
      renderMapMarkers();
    });
  });

  // Landmark chips on Near Me page
  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip-btn").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const key = chip.dataset.landmark;
      if (LANDMARKS[key]) {
        userLocation = { ...LANDMARKS[key], isGPS: false };
        const badge = document.getElementById("locationBadge");
        if (badge) {
          badge.innerHTML = `<span class="dot"></span> At ${LANDMARKS[key].name}`;
        }
        showToast(`Calculated distance from ${LANDMARKS[key].name}`);
        renderNearMeList();
      }
    });
  });

  // Distance filter pills on Near Me page
  document.querySelectorAll(".distance-filter-pills .filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".distance-filter-pills .filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeNearDistanceFilter = pill.dataset.dist || "all";
      renderNearMeList();
    });
  });

<<<<<<< HEAD
  // GPS Locate Button (Near Me page)
  const gpsBtn = document.getElementById("btnGpsLocate");
  if (gpsBtn) gpsBtn.addEventListener("click", toggleGps);

  const mapLocateBtn = document.getElementById("btnMapLocate");
  if (mapLocateBtn) {
    mapLocateBtn.addEventListener("click", toggleGps);
=======
  // GPS Locate Button
  const gpsBtn = document.getElementById("btnGpsLocate");
  if (gpsBtn) gpsBtn.addEventListener("click", handleGpsLocate);

  const mapLocateBtn = document.getElementById("btnMapLocate");
  if (mapLocateBtn) {
    mapLocateBtn.addEventListener("click", () => {
      locateUserOnMap(true);
    });
>>>>>>> origin/main
  }

  const mapFloatBtn = document.getElementById("mapFloatGpsBtn");
  if (mapFloatBtn) {
<<<<<<< HEAD
    mapFloatBtn.addEventListener("click", toggleGps);
=======
    mapFloatBtn.addEventListener("click", () => {
      locateUserOnMap(true);
    });
>>>>>>> origin/main
  }

  // Reset Map View
  const resetMapBtn = document.getElementById("btnResetMap");
  if (resetMapBtn) {
    resetMapBtn.addEventListener("click", () => {
      if (leafletMap) {
        leafletMap.setView([26.2644, 88.1901], 14);
      }
    });
  }

  // Route page buttons
  const btnGoogleMaps = document.getElementById("btnOpenGoogleMapsRoute");
  if (btnGoogleMaps) btnGoogleMaps.addEventListener("click", openRouteInGoogleMaps);

  const btnShareRoute = document.getElementById("btnShareRoute");
  if (btnShareRoute) btnShareRoute.addEventListener("click", shareRouteSummary);

  const btnClearRoute = document.getElementById("btnClearRoute");
  if (btnClearRoute) btnClearRoute.addEventListener("click", clearEntireRoute);

  // Curated trails cards
  document.querySelectorAll(".curated-card").forEach(card => {
    card.addEventListener("click", () => {
      const presetKey = card.dataset.preset;
      loadPresetRoute(presetKey);
    });
  });

  updateRouteCounters();
});

// Expose globals for inline event handlers
window.togglePandalInRoute = togglePandalInRoute;
window.focusMapOnPandal = focusMapOnPandal;
window.reorderStop = reorderStop;
window.navigateToPage = navigateToPage;
window.loadPresetRoute = loadPresetRoute;
window.locateUserOnMap = locateUserOnMap;
window.toggleGps = toggleGps;
window.startGpsWatch = startGpsWatch;
window.stopGpsWatch = stopGpsWatch;
window.closeMapGpsBanner = closeMapGpsBanner;

=======
window.closeMapGpsBanner = closeMapGpsBanner;
>>>>>>> origin/main
