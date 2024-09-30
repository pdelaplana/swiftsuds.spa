/// <reference types="vitest" />
/// <reference types="vite/client" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import dotenv from "dotenv";
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const envFiles = {
    dev: ".env.dev",
    prod: ".env.prod",
  };

  const envFile = dotenv.config({ path: envFiles[mode] }).parsed;

  return {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',

    },
    plugins: [
      react(),
      legacy(),
      tsconfigPaths()
    ],
    define:{
      "process.env": JSON.stringify(envFile),
    },
    resolve: {
      alias: {
        '@api': '/src/api',
        '@domain': '/src/domain',
        // Add more aliases as needed
      },
    },
  };



});
