// vite.config.js
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// vite.config.js

export default defineConfig({
    server: {
      https:true,
      watch: {
        
      },
      host:true,
    },
    plugins: [ mkcert() ],
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    base : './',
    build:{
        outDir:'./docs/'
    }
  })