

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.FYMEJG1k.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/index.D5HGq5EU.js","_app/immutable/chunks/storage.DEI2aqyf.js"];
export const stylesheets = ["_app/immutable/assets/3.DiPqihwW.css"];
export const fonts = [];
