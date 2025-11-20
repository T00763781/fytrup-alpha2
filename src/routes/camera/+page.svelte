<script>
  import { onMount } from "svelte";
  import initCamera from "$lib/camera/capture.js";

  let camContainer;

  onMount(() => {
    initCamera(camContainer);
  });
</script>

<style>
  /* The camera must follow the same layout rules as the map */
  .camera-wrapper {
    width: 100%;
    height: 100%;         /* ← key change */
    background: #000;
    overflow: hidden;
    position: relative;
  }

  /* Ensure video fills fully */
  .camera-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;    /* ← prevents black bars */
  }
</style>

<div class="camera-wrapper" bind:this={camContainer}></div>
