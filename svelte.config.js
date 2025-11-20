import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/fytrup-alpha2'
    },
    appDir: 'app',
    prerender: {
      handleHttpError: 'ignore'
    }
  }
};
