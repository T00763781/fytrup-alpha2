export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["manifest.json","splash.gif","service-worker.js","characters/wolfie_neutral.png","characters/wolfie_confused.png","characters/wolfie_happy.png","icons/marker-512.png","icons/marker.svg","icons/marker-64.png","icons/marker-128.png","icons/marker-256.png"]),
	mimeTypes: {".json":"application/json",".gif":"image/gif",".js":"text/javascript",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.H39noPu4.js","app":"_app/immutable/entry/app.n1LG64jF.js","imports":["_app/immutable/entry/start.H39noPu4.js","_app/immutable/chunks/scheduler.oYtYXvQl.js","_app/immutable/chunks/singletons.CY3vAGaw.js","_app/immutable/chunks/index.Drqx4g8S.js","_app/immutable/entry/app.n1LG64jF.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.oYtYXvQl.js","_app/immutable/chunks/index.D-JCthls.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
