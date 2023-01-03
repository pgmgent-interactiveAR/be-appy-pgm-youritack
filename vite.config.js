// vite.config.js
import { defineConfig } from 'vite'


// vite.config.js

export default defineConfig({
    server: {
      watch: {
        
      },
    },
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    optimizeDeps: {
      exclude: ['your-package-name'],
    },
    base : './',
    build:{
        outDir:'./docs/'
    }
  })