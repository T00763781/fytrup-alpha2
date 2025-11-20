

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/camera/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.kKPHP0St.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/index.D5HGq5EU.js"];
export const stylesheets = ["_app/immutable/assets/5.BGbSAMzn.css"];
export const fonts = [];
