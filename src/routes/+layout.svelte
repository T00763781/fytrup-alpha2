<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  let showSplash = true;
  $: current = $page.url.pathname;

  onMount(() => setTimeout(() => (showSplash = false), 1200));
</script>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    font-family: system-ui, sans-serif;
    background: #003e51;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .splash {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #003e51;
    color: white;
    font-size: 3.6rem;
    z-index: 9999999;
    transition: opacity 0.5s ease;
  }
  .splash.hide { opacity: 0; pointer-events: none; }

  header {
    height: 80px;
    background: #003e51;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.25);
    position: relative;
    flex-shrink: 0;
  }

  .title {
    display: flex;
    gap: 12px;
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 3.6rem;
  }

  .t-find { color:#00b0b9; }
  .t-your { color:#ffcd00; }
  .t-tru  { color:#00b18f; }
  .t-path { color:#f88f23; }

  .profile-btn {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  .profile-btn img { width: 42px; height: 42px; }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .map-container {
    flex: 1;
    min-height: 38vh;
    max-height: 48vh;
    position: relative;
    overflow: hidden;
    z-index: 0;
  }

  .map-container :global(.leaflet-pane),
  .map-container :global(.leaflet-map-pane),
  .map-container :global(.leaflet-tile-pane) {
    z-index: 0 !important;
  }

  .wolfie-wrapper {
    position: absolute;
    left: -10vh;
    bottom: 5vh;
    width: clamp(380px, 52vw, 540px);
    z-index: 9999;
    pointer-events: none;
  }

  .wolfie-img {
    width: 100%;
    height: auto;
    transform: translateY(6vh);
  }

  .subnav {
    width: 100%;
    height: 60px;
    background: #003e51;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding-right: 16px;
    flex-shrink: 0;
    position: relative;
    z-index: 5;
  }

  .nav-btn img { width:48px; height:48px; }

  .text-panel {
    background: #00b18f;
    height: 40vh;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }

  .text-scroll {
    position: absolute;
    top: 0; bottom: 0; right: 0;
    left: clamp(200px, 6vw, 300px);
    overflow-y: auto;
    padding: 22px;
    color: white;
    font-size: 1rem;
    line-height: 1.35rem;
  }
</style>

<div class="app">
  <div class="splash {showSplash ? '' : 'hide'}">
    <span class="t-find">Find</span>
    <span class="t-your">Your</span>
    <span class="t-tru">TRU</span>
    <span class="t-path">Path</span>
  </div>

  <header>
    <div class="title">
      <span class="t-find">Find</span>
      <span class="t-your">Your</span>
      <span class="t-tru">TRU</span>
      <span class="t-path">Path</span>
    </div>

    <a href="{base}/profile" class="profile-btn">
      <img 
        src="{base}{current === '/profile' ? '/icons/Profile_selected.png' : '/icons/Profile.png'}" 
        alt="Profile" 
      />
    </a>
  </header>

  <main>
    <div class="map-container">
      <slot />
    </div>

    <div class="wolfie-wrapper">
      <img src="{base}/characters/wolfie_neutral.png" class="wolfie-img" alt="Wolfie" />
    </div>

    <div class="subnav">
      <a href="{base}/" class="nav-btn">
        <img 
          src="{base}{current === '/' ? '/icons/Map_Selected.png' : '/icons/Map.png'}" 
          alt="Map" 
        />
      </a>

      <a href="{base}/camera" class="nav-btn">
        <img 
          src="{base}{current === '/camera' ? '/icons/Camera_selected.png' : '/icons/Camera.png'}" 
          alt="Camera" 
        />
      </a>
    </div>

    <div class="text-panel">
      <div class="text-scroll">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, lacus ut pulvinar fermentum, mauris nisl gravida justo, sed viverra augue sapien nec velit. Integer et luctus tellus. Suspendisse potenti. Vestibulum porta, erat nec convallis cursus, orci arcu suscipit ligula, id facilisis nibh leo eget justo. Sed eget magna mi. Ut ut consectetur velit. Morbi ac aliquam arcu. Pellentesque ut tortor metus. Cras auctor sapien sed nibh cursus, id efficitur nisi tincidunt.</p>
        <p>Sed vehicula risus sit amet faucibus feugiat.</p>
        <p>Morbi congue, eros non commodo hendrerit, ipsum sem bibendum felis, id vulputate risus leo non libero. Sed sodales nibh eget lorem pulvinar, non gravida eros molestie. Nullam a pretium sem. Quisque in urna facilisis, efficitur eros id, tristique ipsum. Donec ac tellus ut orci dignissim elementum. Pellentesque lacinia sapien id orci maximus, non viverra turpis ultricies. In sodales arcu ut orci bibendum, nec fermentum eros consectetur. Nulla facilisi. Suspendisse porttitor massa vitae eros egestas, vel volutpat est viverra.</p>
        <p>Donec fermentum posuere odio ut tristique lectus ultricies ut.</p>
      </div>
    </div>
  </main>
</div>
