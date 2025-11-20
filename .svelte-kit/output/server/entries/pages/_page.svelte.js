import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const css$1 = {
  code: ".panel.svelte-ydgxoh{position:absolute;left:0;right:0;bottom:0;background:white;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:0 -4px 16px rgba(0,0,0,0.25);padding:1.1rem 1.4rem;transform:translateY(100%);transition:transform 0.32s ease;z-index:5000}.panel.visible.svelte-ydgxoh{transform:translateY(0%)}.header.svelte-ydgxoh{display:flex;align-items:center;gap:1rem}.portrait.svelte-ydgxoh{width:72px;height:72px;border-radius:14px;object-fit:cover;border:3px solid #003e51}.character.svelte-ydgxoh{font-size:1.3rem;font-weight:700;color:#003e51}.title.svelte-ydgxoh{margin-top:0.9rem;font-size:1.15rem;font-weight:600;color:#003e51}.body.svelte-ydgxoh{margin-top:0.4rem;font-size:1.05rem;line-height:1.4;color:#003e51}.btn.svelte-ydgxoh{margin-top:1.4rem;width:100%;background:#003e51;color:white;border:none;padding:0.8rem 1rem;border-radius:10px;font-size:1.1rem;cursor:pointer}",
  map: `{"version":3,"file":"DialoguePanel.svelte","sources":["DialoguePanel.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n\\n  export let visible = false;\\n  export let character = \\"Wolfie\\";\\n  export let portrait = \\"/fytrup-alpha2/characters/wolfie_neutral.png\\";\\n  export let title = \\"\\";\\n  export let text = \\"\\";\\n  export let poiId = null;\\n\\n  const dispatch = createEventDispatcher();\\n\\n  function close() {\\n    dispatch(\\"close\\", { poiId });\\n  }\\n<\/script>\\n\\n<style>\\n  .panel {\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background: white;\\n    border-top-left-radius: 20px;\\n    border-top-right-radius: 20px;\\n    box-shadow: 0 -4px 16px rgba(0,0,0,0.25);\\n    padding: 1.1rem 1.4rem;\\n    transform: translateY(100%);\\n    transition: transform 0.32s ease;\\n    z-index: 5000;\\n  }\\n\\n  .panel.visible {\\n    transform: translateY(0%);\\n  }\\n\\n  .header {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\\n  .portrait {\\n    width: 72px;\\n    height: 72px;\\n    border-radius: 14px;\\n    object-fit: cover;\\n    border: 3px solid #003e51;\\n  }\\n\\n  .character {\\n    font-size: 1.3rem;\\n    font-weight: 700;\\n    color: #003e51;\\n  }\\n\\n  .title {\\n    margin-top: 0.9rem;\\n    font-size: 1.15rem;\\n    font-weight: 600;\\n    color: #003e51;\\n  }\\n\\n  .body {\\n    margin-top: 0.4rem;\\n    font-size: 1.05rem;\\n    line-height: 1.4;\\n    color: #003e51;\\n  }\\n\\n  .btn {\\n    margin-top: 1.4rem;\\n    width: 100%;\\n    background: #003e51;\\n    color: white;\\n    border: none;\\n    padding: 0.8rem 1rem;\\n    border-radius: 10px;\\n    font-size: 1.1rem;\\n    cursor: pointer;\\n  }\\n</style>\\n\\n<div class=\\"panel {visible ? 'visible' : ''}\\">\\n  <div class=\\"header\\">\\n    <img class=\\"portrait\\" src={portrait} alt={character} />\\n    <div class=\\"character\\">{character}</div>\\n  </div>\\n\\n  <div class=\\"title\\">{title}</div>\\n  <div class=\\"body\\">{text}</div>\\n\\n  <button class=\\"btn\\" on:click={close}>Continue</button>\\n</div>\\n"],"names":[],"mappings":"AAkBE,oBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,KAAK,CACjB,sBAAsB,CAAE,IAAI,CAC5B,uBAAuB,CAAE,IAAI,CAC7B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxC,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,IAAI,CAChC,OAAO,CAAE,IACX,CAEA,MAAM,sBAAS,CACb,SAAS,CAAE,WAAW,EAAE,CAC1B,CAEA,qBAAQ,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,uBAAU,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CAEA,wBAAW,CACT,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,oBAAO,CACL,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,mBAAM,CACJ,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,kBAAK,CACH,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OACV"}`
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
  code: ".page.svelte-15gl2c{display:flex;flex-direction:column;height:100%}#map-container.svelte-15gl2c{flex:1;position:relative;min-height:45vh}.dialogue-wrapper.svelte-15gl2c{position:relative}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount, tick } from \\"svelte\\";\\n  import { initMap } from \\"$lib/map/leaflet.js\\";\\n  import DialoguePanel from \\"$lib/dialogue/DialoguePanel.svelte\\";\\n  import { dialogue, closeDialogue, initializeDialogueSystem } from \\"$lib/dialogue/controller.js\\";\\n\\n  let dlg;\\n  dialogue.subscribe(v => (dlg = v));\\n\\n  let mapContainer;\\n  let mapInstance = null;\\n\\n  onMount(async () => {\\n    await tick();\\n    mapInstance = initMap(mapContainer);\\n    initializeDialogueSystem();\\n  });\\n<\/script>\\n\\n<style>\\n  .page {\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n  }\\n\\n  #map-container {\\n    flex: 1;\\n    position: relative;\\n    min-height: 45vh;\\n  }\\n\\n  .dialogue-wrapper {\\n    position: relative;\\n  }\\n</style>\\n\\n<div class=\\"page\\">\\n  <div id=\\"map-container\\" bind:this={mapContainer}></div>\\n\\n  <div class=\\"dialogue-wrapper\\">\\n    <DialoguePanel\\n      visible={dlg.visible}\\n      character={dlg.character}\\n      portrait={dlg.portrait}\\n      title={dlg.title}\\n      text={dlg.text}\\n      poiId={dlg.poiId}\\n      on:close={() => closeDialogue()}\\n    />\\n  </div>\\n</div>"],"names":[],"mappings":"AAoBE,mBAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACV,CAEA,4BAAe,CACb,IAAI,CAAE,CAAC,CACP,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,IACd,CAEA,+BAAkB,CAChB,QAAQ,CAAE,QACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dlg;
  dialogue.subscribe((v) => dlg = v);
  let mapContainer;
  $$result.css.add(css);
  return `<div class="page svelte-15gl2c"><div id="map-container" class="svelte-15gl2c"${add_attribute("this", mapContainer, 0)}></div> <div class="dialogue-wrapper svelte-15gl2c">${validate_component(DialoguePanel, "DialoguePanel").$$render(
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
  )}</div></div>`;
});
export {
  Page as default
};
