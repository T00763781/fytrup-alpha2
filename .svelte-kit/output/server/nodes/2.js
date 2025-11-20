

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bzfw0-gu.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/index.D5HGq5EU.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/storage.DEI2aqyf.js","_app/immutable/chunks/index.C9EuUJDl.js"];
export const stylesheets = ["_app/immutable/assets/2.DBTa-6jK.css"];
export const fonts = [];
