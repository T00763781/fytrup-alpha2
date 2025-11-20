import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/fytrup-alpha2' : ''
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
