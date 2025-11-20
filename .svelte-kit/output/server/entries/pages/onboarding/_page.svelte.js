import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".wrap.svelte-1utd7pm{height:100%;text-align:center;padding:2rem 1.5rem}h1.svelte-1utd7pm{color:#003e51;margin-bottom:0.6rem}p.svelte-1utd7pm{font-size:1.1rem;color:#003e51;line-height:1.4}button.svelte-1utd7pm{margin-top:2rem;background:#003e51;color:white;border:none;border-radius:10px;padding:0.7rem 1.6rem;font-size:1.1rem;cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import { updateState, getState } from \\"$lib/state/storage.js\\";\\r\\n  import { initMap } from '$lib/map/leaflet.js';\\r\\n\\r\\n  let step = 0;\\r\\n\\r\\n  const slides = [\\r\\n    {\\r\\n      title: \\"Welcome to TRU\\",\\r\\n      text: \\"Explore campus, unlock locations, and meet Wolfie along the way.\\"\\r\\n    },\\r\\n    {\\r\\n      title: \\"Live Map\\",\\r\\n      text: \\"See your real-time location as you navigate TRU.\\"\\r\\n    },\\r\\n    {\\r\\n      title: \\"Camera Mode\\",\\r\\n      text: \\"Switch to camera view to capture markers and reveal surprises.\\"\\r\\n    },\\r\\n    {\\r\\n      title: \\"Chat With Wolfie\\",\\r\\n      text: \\"Ask questions anytime — Wolfie is your campus guide.\\"\\r\\n    }\\r\\n  ];\\r\\n\\r\\n  function next() {\\r\\n    if (step < slides.length - 1) {\\r\\n      step++;\\r\\n    } else {\\r\\n      updateState({ onboardingComplete: true });\\r\\n      window.location.href = \\"/\\";\\r\\n    }\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .wrap {\\r\\n    height: 100%;\\r\\n    text-align: center;\\r\\n    padding: 2rem 1.5rem;\\r\\n  }\\r\\n  h1 {\\r\\n    color: #003e51;\\r\\n    margin-bottom: 0.6rem;\\r\\n  }\\r\\n  p {\\r\\n    font-size: 1.1rem;\\r\\n    color: #003e51;\\r\\n    line-height: 1.4;\\r\\n  }\\r\\n  button {\\r\\n    margin-top: 2rem;\\r\\n    background: #003e51;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    padding: 0.7rem 1.6rem;\\r\\n    font-size: 1.1rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"wrap\\">\\r\\n  <h1>{slides[step].title}</h1>\\r\\n  <p>{slides[step].text}</p>\\r\\n\\r\\n  <button on:click={next}>\\r\\n    {step === slides.length - 1 ? \\"Start Exploring\\" : \\"Next\\"}\\r\\n  </button>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAoCE,oBAAM,CACJ,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,MAChB,CACA,iBAAG,CACD,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,MACjB,CACA,gBAAE,CACA,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GACf,CACA,qBAAO,CACL,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let step = 0;
  const slides = [
    {
      title: "Welcome to TRU",
      text: "Explore campus, unlock locations, and meet Wolfie along the way."
    },
    {
      title: "Live Map",
      text: "See your real-time location as you navigate TRU."
    },
    {
      title: "Camera Mode",
      text: "Switch to camera view to capture markers and reveal surprises."
    },
    {
      title: "Chat With Wolfie",
      text: "Ask questions anytime — Wolfie is your campus guide."
    }
  ];
  $$result.css.add(css);
  return `<div class="wrap svelte-1utd7pm"><h1 class="svelte-1utd7pm">${escape(slides[step].title)}</h1> <p class="svelte-1utd7pm">${escape(slides[step].text)}</p> <button class="svelte-1utd7pm">${escape(step === slides.length - 1 ? "Start Exploring" : "Next")}</button></div>`;
});
export {
  Page as default
};
