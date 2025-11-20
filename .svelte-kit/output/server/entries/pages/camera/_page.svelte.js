import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".camera-wrapper.svelte-y0taql{width:100%;height:100%;background:#000;overflow:hidden;position:relative}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import initCamera from \\"$lib/camera/capture.js\\";\\n\\n  let camContainer;\\n\\n  onMount(() => {\\n    initCamera(camContainer);\\n  });\\n<\/script>\\n\\n<style>\\n  /* The camera must follow the same layout rules as the map */\\n  .camera-wrapper {\\n    width: 100%;\\n    height: 100%;         /* ← key change */\\n    background: #000;\\n    overflow: hidden;\\n    position: relative;\\n  }\\n\\n  /* Ensure video fills fully */\\n  .camera-wrapper video {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;    /* ← prevents black bars */\\n  }\\n</style>\\n\\n<div class=\\"camera-wrapper\\" bind:this={camContainer}></div>\\n"],"names":[],"mappings":"AAaE,6BAAgB,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let camContainer;
  $$result.css.add(css);
  return `<div class="camera-wrapper svelte-y0taql"${add_attribute("this", camContainer, 0)}></div>`;
});
export {
  Page as default
};
