import { sveltekit } from '@sveltejs/kit/vite';

/**
 * Minimal Vite 5 + SvelteKit v2 config.
 * No legacy vite-plugin-svelte references.
 */
const config = {
  plugins: [sveltekit()]
};

export default config;
