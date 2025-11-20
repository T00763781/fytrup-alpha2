// src/lib/map/leaflet.js
import { browser } from '$app/environment';
import { base } from '$app/paths';
import { getVisited } from "$lib/state/storage.js";

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

  // Prevent double init
  if (container._leaflet_map) return container._leaflet_map;

  const L = await loadLeaflet();
  if (!L) return null;

  // -----------------------------------------
  //  FIX LEAFLET'S INTERNAL BROKEN DEFAULT ICONS
  // -----------------------------------------
  L.Icon.Default.mergeOptions({
    // Disabled defaults to stop root-path lookups
    iconRetinaUrl: `${base}/icons/marker_unseen.png`,
    iconUrl: `${base}/icons/marker_unseen.png`,
    shadowUrl: `${base}/icons/marker_shadow.png`
  });

  // -----------------------------------------
  //  THREE-STATE MARKERS — BASE-AWARE
  // -----------------------------------------
  const unseenIcon = L.icon({
    iconUrl: `${base}/icons/marker_unseen.png`,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -44]
  });

  const visitedIcon = L.icon({
    iconUrl: `${base}/icons/marker_visited.png`,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -44]
  });

  const completedIcon = L.icon({
    iconUrl: `${base}/icons/marker_completed.png`,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  // -----------------------------------------
  //  MAP SETUP
  // -----------------------------------------
  const defaultCenter = [50.6718, -120.3645];

  const map = L.map(container, {
    center: defaultCenter,
    zoom: 16,
    zoomControl: true
  });

  container._leaflet_map = map;

  // FOIPPA-safe tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);

  // -----------------------------------------
  //  LOAD REGISTRY + VISITED STATE
  // -----------------------------------------
  const registry = (await import('$lib/poi/registry.json')).default;
  const visitedState = new Set(getVisited());

  // -----------------------------------------
  //  ADD MARKERS
  // -----------------------------------------
  registry.forEach((poi) => {
    let icon = unseenIcon;

    if (visitedState.has(poi.id)) {
      icon = visitedIcon;
    }

    if (poi.completed) {
      icon = completedIcon;
    }

    L.marker(poi.coords, { icon })
      .addTo(map)
      .bindPopup(poi.name);
  });

  return map;
}
