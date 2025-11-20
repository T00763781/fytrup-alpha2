

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.Bps36YyA.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/index.D5HGq5EU.js","app/immutable/chunks/stores.-PzXEyVV.js","app/immutable/chunks/singletons.CFYI3nnn.js","app/immutable/chunks/index.C9EuUJDl.js"];
export const stylesheets = [];
export const fonts = [];
