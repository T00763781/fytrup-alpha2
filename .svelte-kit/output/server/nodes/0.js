import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.DGQzrSBi.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/index.D5HGq5EU.js","app/immutable/chunks/stores.-PzXEyVV.js","app/immutable/chunks/singletons.CFYI3nnn.js","app/immutable/chunks/index.C9EuUJDl.js"];
export const stylesheets = ["app/immutable/assets/0.D3z7DYCW.css"];
export const fonts = [];
