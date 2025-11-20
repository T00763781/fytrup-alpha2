<script>
  import { onMount, tick } from "svelte";
  import { base } from "$app/paths";

  // base-aware imports
  import { initMap } from "$lib/map/leaflet.js";
  import DialoguePanel from "$lib/dialogue/DialoguePanel.svelte";
  import {
    dialogue,
    closeDialogue,
    initializeDialogueSystem
  } from "$lib/dialogue/controller.js";

  let dlg;
  dialogue.subscribe(v => (dlg = v));

  let mapContainer;
  let mapInstance = null;

  onMount(async () => {
    await tick();

    // base is now respected inside initMap()
    mapInstance = initMap(mapContainer);

    // dialogue controller now loads portraits with base prefix
    initializeDialogueSystem();
  });
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #map-container {
    flex: 1;
    position: relative;
    min-height: 45vh;
  }

  .dialogue-wrapper {
    position: relative;
  }
</style>

<div class="page">
  <div id="map-container" bind:this={mapContainer}></div>

  <div class="dialogue-wrapper">
    <DialoguePanel
      visible={dlg.visible}
      character={dlg.character}
      portrait={dlg.portrait}
      title={dlg.title}
      text={dlg.text}
      poiId={dlg.poiId}
      on:close={() => closeDialogue()}
    />
  </div>
</div>
