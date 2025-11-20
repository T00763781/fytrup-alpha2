

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/3.BCmN0f80.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/index.D5HGq5EU.js","app/immutable/chunks/storage.DEI2aqyf.js"];
export const stylesheets = ["app/immutable/assets/3.DiPqihwW.css"];
export const fonts = [];
