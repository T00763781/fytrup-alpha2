import { writable } from "svelte/store";
import { startPOIEngine } from "$lib/poi/engine.js";
import registry from "$lib/poi/registry.json";
import { base } from "$app/paths";

export const dialogue = writable({
  visible: false,
  character: "",
  portrait: "",
  title: "",
  text: "",
  poiId: null
});

let triggered = new Set();

// Initialize POI → Dialogue routing
export function initializeDialogueSystem() {
  startPOIEngine((poi) => {
    if (!poi || triggered.has(poi.id)) return;

    triggered.add(poi.id);

    // Build base-aware portrait path
    const portraitPath =
      poi.portrait
        ? `${base}${poi.portrait}`
        : `${base}/characters/wolfie_neutral.png`;

    dialogue.set({
      visible: true,
      character: poi.character ?? "Wolfie",
      portrait: portraitPath,
      title: poi.name,
      text: poi.intro,
      poiId: poi.id
    });
  });
}

export function closeDialogue() {
  dialogue.update((d) => ({ ...d, visible: false }));
}
