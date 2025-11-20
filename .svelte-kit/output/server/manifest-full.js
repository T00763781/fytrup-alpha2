export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "fytrup-alpha2/_app",
	assets: new Set(["manifest.json","service-worker.js","splash.gif","characters/wolfie_confused.png","characters/wolfie_happy.png","characters/wolfie_neutral.png","icons/marker.svg","icons/Map_Selected.png","icons/Profile.png","icons/Profile_selected.png","icons/Camera.png","icons/Camera_selected.png","icons/Map.png","icons/marker_completed.png","icons/marker_unseen.png","icons/marker_visited.png"]),
	mimeTypes: {".json":"application/json",".js":"text/javascript",".gif":"image/gif",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cia5wS6b.js","app":"_app/immutable/entry/app.C99o63p7.js","imports":["_app/immutable/entry/start.Cia5wS6b.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/singletons.DpVVdzBB.js","_app/immutable/chunks/index.C9EuUJDl.js","_app/immutable/entry/app.C99o63p7.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.D4wV5lJR.js","_app/immutable/chunks/index.D5HGq5EU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/_onboarding_disabled",
				pattern: /^\/_onboarding_disabled\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/camera",
				pattern: /^\/camera\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
