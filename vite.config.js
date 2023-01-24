// vite.config.js
import { defineConfig,splitVendorChunkPlugin, } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';

// vite.config.js

export default defineConfig({
    server: {
      https:true,
      watch: {
        
      },
      host:true,
    },
    plugins: [ mkcert(),splitVendorChunkPlugin() ],
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    base : './',
    build:{
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'aframe/index.html'),
        },
      },
        outDir:'./docs/',
        chunkSizeWarningLimit: 1600,
    
  },
  })