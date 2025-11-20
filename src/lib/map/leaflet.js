// src/lib/map/leaflet.js
// This file must be client-only:
import { browser } from '$app/environment';
import { getVisited } from "$lib/state/storage.js";   // NEW: read state

let leafletPromise = null;

async function loadLeaflet() {
  if (!browser) return null;

  if (!leafletPromise) {
    leafletPromise = (async () => {
      const Lmod = await import('leaflet');
      await import('leaflet/dist/leaflet.css');
      return Lmod.default;
    })();
  }

  return leafletPromise;
}

export async function initMap(container) {
  if (!browser) return null;
  if (!container) return null;

  // Prevent re-initialization
  if (container._leaflet_map) return container._leaflet_map;

  const L = await loadLeaflet();
  if (!L) return null;

  // -----------------------------------------
  //  NEW — THREE-STATE ICON SET
  // -----------------------------------------
  const unseenIcon = L.icon({
    iconUrl: '/icons/marker_unseen.png',
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -44]
  });

  const visitedIcon = L.icon({
    iconUrl: '/icons/marker_visited.png',
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -44]
  });

  const completedIcon = L.icon({
    iconUrl: '/icons/marker_completed.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  // -----------------------------------------
  //  MAP INITIALIZATION
  // -----------------------------------------
  const defaultCenter = [50.6718, -120.3645];

  const map = L.map(container, {
    center: defaultCenter,
    zoom: 16,
    zoomControl: true
  });

  container._leaflet_map = map;

  // FOIPPA-safe OSM tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);

  // Load POI registry
  const registry = (await import('$lib/poi/registry.json')).default;

  // Load visited state (Set or Array accepted)
  const visitedState = new Set(getVisited());

  // -----------------------------------------
  //  ADD POI MARKERS USING STATE LOGIC
  // -----------------------------------------
  registry.forEach((poi) => {
    
    // choose default icon
    let icon = unseenIcon;

    // visited?
    if (visitedState.has(poi.id)) {
      icon = visitedIcon;
    }

    // completed? (if you later add poi.completed = true)
    if (poi.completed) {
      icon = completedIcon;
    }

    L.marker(poi.coords, { icon })
      .addTo(map)
      .bindPopup(poi.name);
  });

  return map;
}
