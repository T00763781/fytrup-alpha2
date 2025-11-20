

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/camera/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/5.DNyS9MfH.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/index.D5HGq5EU.js"];
export const stylesheets = ["app/immutable/assets/5.BGbSAMzn.css"];
export const fonts = [];
