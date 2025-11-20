export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "fytrup-alpha2/app",
	assets: new Set(["manifest.json","service-worker.js","splash.gif","characters/wolfie_confused.png","characters/wolfie_happy.png","characters/wolfie_neutral.png","icons/marker.svg","icons/Map_Selected.png","icons/Profile.png","icons/Profile_selected.png","icons/Camera.png","icons/Camera_selected.png","icons/Map.png","icons/marker_completed.png","icons/marker_unseen.png","icons/marker_visited.png"]),
	mimeTypes: {".json":"application/json",".js":"text/javascript",".gif":"image/gif",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"app/immutable/entry/start.BqMP95ix.js","app":"app/immutable/entry/app.gPuAYxCb.js","imports":["app/immutable/entry/start.BqMP95ix.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/singletons.CFYI3nnn.js","app/immutable/chunks/index.C9EuUJDl.js","app/immutable/entry/app.gPuAYxCb.js","app/immutable/chunks/preload-helper.BQ24v_F8.js","app/immutable/chunks/scheduler.D4wV5lJR.js","app/immutable/chunks/index.D5HGq5EU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
