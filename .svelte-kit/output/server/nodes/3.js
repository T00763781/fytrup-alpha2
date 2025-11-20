

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/onboarding/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bg-IWEUK.js","_app/immutable/chunks/scheduler.oYtYXvQl.js","_app/immutable/chunks/index.D-JCthls.js","_app/immutable/chunks/storage.DroUJqdZ.js"];
export const stylesheets = ["_app/immutable/assets/3.j5xGGGBR.css"];
export const fonts = [];
