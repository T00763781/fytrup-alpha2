import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "@mlc-ai/web-llm";
import { w as writable } from "../../chunks/index.js";
const css$1 = {
  code: ".panel.svelte-ydgxoh{position:absolute;left:0;right:0;bottom:0;background:white;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:0 -4px 16px rgba(0,0,0,0.25);padding:1.1rem 1.4rem;transform:translateY(100%);transition:transform 0.32s ease;z-index:5000}.panel.visible.svelte-ydgxoh{transform:translateY(0%)}.header.svelte-ydgxoh{display:flex;align-items:center;gap:1rem}.portrait.svelte-ydgxoh{width:72px;height:72px;border-radius:14px;object-fit:cover;border:3px solid #003e51}.character.svelte-ydgxoh{font-size:1.3rem;font-weight:700;color:#003e51}.title.svelte-ydgxoh{margin-top:0.9rem;font-size:1.15rem;font-weight:600;color:#003e51}.body.svelte-ydgxoh{margin-top:0.4rem;font-size:1.05rem;line-height:1.4;color:#003e51}.btn.svelte-ydgxoh{margin-top:1.4rem;width:100%;background:#003e51;color:white;border:none;padding:0.8rem 1rem;border-radius:10px;font-size:1.1rem;cursor:pointer}",
  map: `{"version":3,"file":"DialoguePanel.svelte","sources":["DialoguePanel.svelte"],"sourcesContent":["<script>\\r\\n  import { createEventDispatcher } from \\"svelte\\";\\r\\n\\r\\n  export let visible = false;\\r\\n  export let character = \\"Wolfie\\";\\r\\n  export let portrait = \\"/fytrup-alpha2/characters/wolfie_neutral.png\\";\\r\\n  export let title = \\"\\";\\r\\n  export let text = \\"\\";\\r\\n  export let poiId = null;\\r\\n\\r\\n  const dispatch = createEventDispatcher();\\r\\n\\r\\n  function close() {\\r\\n    dispatch(\\"close\\", { poiId });\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .panel {\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    background: white;\\r\\n    border-top-left-radius: 20px;\\r\\n    border-top-right-radius: 20px;\\r\\n    box-shadow: 0 -4px 16px rgba(0,0,0,0.25);\\r\\n    padding: 1.1rem 1.4rem;\\r\\n    transform: translateY(100%);\\r\\n    transition: transform 0.32s ease;\\r\\n    z-index: 5000;\\r\\n  }\\r\\n\\r\\n  .panel.visible {\\r\\n    transform: translateY(0%);\\r\\n  }\\r\\n\\r\\n  .header {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n\\r\\n  .portrait {\\r\\n    width: 72px;\\r\\n    height: 72px;\\r\\n    border-radius: 14px;\\r\\n    object-fit: cover;\\r\\n    border: 3px solid #003e51;\\r\\n  }\\r\\n\\r\\n  .character {\\r\\n    font-size: 1.3rem;\\r\\n    font-weight: 700;\\r\\n    color: #003e51;\\r\\n  }\\r\\n\\r\\n  .title {\\r\\n    margin-top: 0.9rem;\\r\\n    font-size: 1.15rem;\\r\\n    font-weight: 600;\\r\\n    color: #003e51;\\r\\n  }\\r\\n\\r\\n  .body {\\r\\n    margin-top: 0.4rem;\\r\\n    font-size: 1.05rem;\\r\\n    line-height: 1.4;\\r\\n    color: #003e51;\\r\\n  }\\r\\n\\r\\n  .btn {\\r\\n    margin-top: 1.4rem;\\r\\n    width: 100%;\\r\\n    background: #003e51;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    padding: 0.8rem 1rem;\\r\\n    border-radius: 10px;\\r\\n    font-size: 1.1rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"panel {visible ? 'visible' : ''}\\">\\r\\n  <div class=\\"header\\">\\r\\n    <img class=\\"portrait\\" src={portrait} alt={character} />\\r\\n    <div class=\\"character\\">{character}</div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"title\\">{title}</div>\\r\\n  <div class=\\"body\\">{text}</div>\\r\\n\\r\\n  <button class=\\"btn\\" on:click={close}>Continue</button>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAkBE,oBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,KAAK,CACjB,sBAAsB,CAAE,IAAI,CAC5B,uBAAuB,CAAE,IAAI,CAC7B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxC,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,IAAI,CAChC,OAAO,CAAE,IACX,CAEA,MAAM,sBAAS,CACb,SAAS,CAAE,WAAW,EAAE,CAC1B,CAEA,qBAAQ,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,uBAAU,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CAEA,wBAAW,CACT,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,oBAAO,CACL,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,mBAAM,CACJ,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,kBAAK,CACH,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OACV"}`
};
const DialoguePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visible = false } = $$props;
  let { character = "Wolfie" } = $$props;
  let { portrait = "/fytrup-alpha2/characters/wolfie_neutral.png" } = $$props;
  let { title = "" } = $$props;
  let { text = "" } = $$props;
  let { poiId = null } = $$props;
  createEventDispatcher();
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.character === void 0 && $$bindings.character && character !== void 0)
    $$bindings.character(character);
  if ($$props.portrait === void 0 && $$bindings.portrait && portrait !== void 0)
    $$bindings.portrait(portrait);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.poiId === void 0 && $$bindings.poiId && poiId !== void 0)
    $$bindings.poiId(poiId);
  $$result.css.add(css$1);
  return `<div class="${"panel " + escape(visible ? "visible" : "", true) + " svelte-ydgxoh"}"><div class="header svelte-ydgxoh"><img class="portrait svelte-ydgxoh"${add_attribute("src", portrait, 0)}${add_attribute("alt", character, 0)}> <div class="character svelte-ydgxoh">${escape(character)}</div></div> <div class="title svelte-ydgxoh">${escape(title)}</div> <div class="body svelte-ydgxoh">${escape(text)}</div> <button class="btn svelte-ydgxoh" data-svelte-h="svelte-1tlj5zy">Continue</button></div>`;
});
const dialogue = writable({
  visible: false,
  character: "",
  portrait: "",
  title: "",
  text: "",
  poiId: null
});
const css = {
  code: ".page.svelte-bro0xo.svelte-bro0xo{display:flex;flex-direction:column;height:100%}.view.svelte-bro0xo.svelte-bro0xo{flex:1;position:relative;background:#e3ecef}.map-area.svelte-bro0xo.svelte-bro0xo,.camera-area.svelte-bro0xo.svelte-bro0xo{position:absolute;inset:0}.chat-area.svelte-bro0xo.svelte-bro0xo{position:absolute;inset:0;background:white;display:flex;flex-direction:column}nav.svelte-bro0xo.svelte-bro0xo{height:56px;background:#003e51;color:white;display:flex;justify-content:space-around;align-items:center}nav.svelte-bro0xo button.svelte-bro0xo{background:none;border:none;color:white;font-size:1rem;cursor:pointer}nav.svelte-bro0xo button.active.svelte-bro0xo{color:#ffcd00;font-weight:700}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount, tick } from \\"svelte\\";\\r\\n\\r\\n  import { initMap } from '$lib/map/leaflet.js';\\r\\n\\r\\n  import initCamera from \\"$lib/camera/capture.js\\";\\r\\n  import ChatBox from \\"$lib/chat/ChatBox.svelte\\";\\r\\n  import DialoguePanel from \\"$lib/dialogue/DialoguePanel.svelte\\";\\r\\n\\r\\n  import { dialogue, closeDialogue, initializeDialogueSystem } from \\"$lib/dialogue/controller.js\\";\\r\\n\\r\\n  let dlg;\\r\\n  dialogue.subscribe(v => dlg = v);\\r\\n\\r\\n  let current = \\"map\\";\\r\\n  let mapContainer;\\r\\n  let cameraContainer;\\r\\n  let mapInstance = null;\\r\\n  let cameraStarted = false;\\r\\n\\r\\n  function switchMode(mode) {\\r\\n    current = mode;\\r\\n  }\\r\\n\\r\\n  onMount(async () => {\\r\\n    await tick();\\r\\n\\r\\n    // Initialize map on first load\\r\\n    mapInstance = initMap(mapContainer);\\r\\n\\r\\n    // Start POI → dialogue system\\r\\n    initializeDialogueSystem();\\r\\n  });\\r\\n\\r\\n  $: if (current === \\"map\\" && mapContainer && !mapInstance) {\\r\\n    mapInstance = initMap(mapContainer);\\r\\n  }\\r\\n\\r\\n  $: if (current === \\"camera\\" && cameraContainer && !cameraStarted) {\\r\\n    initCamera(cameraContainer);\\r\\n    cameraStarted = true;\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .page { display: flex; flex-direction: column; height: 100%; }\\r\\n  .view { flex: 1; position: relative; background: #e3ecef; }\\r\\n  .map-area, .camera-area {\\r\\n    position: absolute; inset: 0;\\r\\n  }\\r\\n  .chat-area {\\r\\n    position: absolute; inset: 0;\\r\\n    background: white;\\r\\n    display: flex; flex-direction: column;\\r\\n  }\\r\\n  nav {\\r\\n    height: 56px;\\r\\n    background: #003e51;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n  }\\r\\n  nav button {\\r\\n    background: none; border: none; color: white;\\r\\n    font-size: 1rem; cursor: pointer;\\r\\n  }\\r\\n  nav button.active {\\r\\n    color: #ffcd00;\\r\\n    font-weight: 700;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"page\\">\\r\\n  <div class=\\"view\\">\\r\\n    {#if current === \\"map\\"}\\r\\n      <div bind:this={mapContainer} class=\\"map-area\\"></div>\\r\\n    {/if}\\r\\n\\r\\n    {#if current === \\"camera\\"}\\r\\n      <div bind:this={cameraContainer} class=\\"camera-area\\"></div>\\r\\n    {/if}\\r\\n\\r\\n    {#if current === \\"chat\\"}\\r\\n      <div class=\\"chat-area\\">\\r\\n        <ChatBox />\\r\\n      </div>\\r\\n    {/if}\\r\\n\\r\\n    <!-- Slide-up POI Dialogue Panel -->\\r\\n    <DialoguePanel\\r\\n      visible={dlg.visible}\\r\\n      character={dlg.character}\\r\\n      portrait={dlg.portrait}\\r\\n      title={dlg.title}\\r\\n      text={dlg.text}\\r\\n      poiId={dlg.poiId}\\r\\n      on:close={() => closeDialogue()}\\r\\n    />\\r\\n  </div>\\r\\n\\r\\n  <nav>\\r\\n    <button class:active={current === \\"map\\"} on:click={() => switchMode(\\"map\\")}>Map</button>\\r\\n    <button class:active={current === \\"camera\\"} on:click={() => switchMode(\\"camera\\")}>Camera</button>\\r\\n    <button class:active={current === \\"chat\\"} on:click={() => switchMode(\\"chat\\")}>Chat</button>\\r\\n  </nav>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AA6CE,iCAAM,CAAE,OAAO,CAAE,IAAI,CAAE,cAAc,CAAE,MAAM,CAAE,MAAM,CAAE,IAAM,CAC7D,iCAAM,CAAE,IAAI,CAAE,CAAC,CAAE,QAAQ,CAAE,QAAQ,CAAE,UAAU,CAAE,OAAS,CAC1D,qCAAS,CAAE,wCAAa,CACtB,QAAQ,CAAE,QAAQ,CAAE,KAAK,CAAE,CAC7B,CACA,sCAAW,CACT,QAAQ,CAAE,QAAQ,CAAE,KAAK,CAAE,CAAC,CAC5B,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CAAE,cAAc,CAAE,MACjC,CACA,+BAAI,CACF,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MACf,CACA,iBAAG,CAAC,oBAAO,CACT,UAAU,CAAE,IAAI,CAAE,MAAM,CAAE,IAAI,CAAE,KAAK,CAAE,KAAK,CAC5C,SAAS,CAAE,IAAI,CAAE,MAAM,CAAE,OAC3B,CACA,iBAAG,CAAC,MAAM,qBAAQ,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dlg;
  dialogue.subscribe((v) => dlg = v);
  let mapContainer;
  $$result.css.add(css);
  return `<div class="page svelte-bro0xo"><div class="view svelte-bro0xo">${`<div class="map-area svelte-bro0xo"${add_attribute("this", mapContainer, 0)}></div>`} ${``} ${``}  ${validate_component(DialoguePanel, "DialoguePanel").$$render(
    $$result,
    {
      visible: dlg.visible,
      character: dlg.character,
      portrait: dlg.portrait,
      title: dlg.title,
      text: dlg.text,
      poiId: dlg.poiId
    },
    {},
    {}
  )}</div> <nav class="svelte-bro0xo"><button class="${["svelte-bro0xo", "active"].join(" ").trim()}" data-svelte-h="svelte-kpkcxr">Map</button> <button class="${["svelte-bro0xo", ""].join(" ").trim()}" data-svelte-h="svelte-1q9vkla">Camera</button> <button class="${["svelte-bro0xo", ""].join(" ").trim()}" data-svelte-h="svelte-1y1g1m1">Chat</button></nav></div>`;
});
export {
  Page as default
};
