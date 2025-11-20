import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.b4uEAhdt.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/index.D5HGq5EU.js","_app/immutable/chunks/stores.SvqnnBzq.js","_app/immutable/chunks/singletons.DpVVdzBB.js","_app/immutable/chunks/index.C9EuUJDl.js"];
export const stylesheets = ["_app/immutable/assets/0.D3z7DYCW.css"];
export const fonts = [];
