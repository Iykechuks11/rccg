import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-church-site.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});