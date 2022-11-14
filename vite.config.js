import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      fileName: 'out',
      formats: [],
    },
    rollupOptions: {
      output: [
        { dir: 'cjs', format: 'cjs', sourcemap: true },
        { dir: 'esm', format: 'es', sourcemap: true },
      ],
    },
  },
});
