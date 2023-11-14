import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';
import Unocss from '@unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
// import Pages from 'vite-plugin-pages';
// import AutoImport from 'unplugin-auto-import/vite';
import pkg from './package.json';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'vitest.setup.ts',
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'c8',
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    deps: {
      // inline: [/@nuxt\/test-utils-edge/],
    },
  },
  plugins: [
    vue(),
    Unocss(),
    dts({ insertTypesEntry: true }),
    tsconfigPaths(),
    // Pages(),
    Components({
      dts: true, // for typescript
      resolvers: [
        (componentName) => {
          if (componentName.startsWith("Prt")) {
            return {
              name: componentName,
              from: path.resolve(__dirname, 'dist/protium-ui.es.js'),
            };
          }
        },
      ],
    }),
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'uno-config': path.resolve(__dirname, 'uno.config.ts'),
      },
      name: 'protobiont-ui-vue',
      fileName: (format, entryName) =>
        format === 'es' ? `${entryName}.mjs` : `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'unocss'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {})
      ),
      output: {
        globals: {
          vue: 'Vue',
          unocss: 'Unocss',
        },
        exports: 'auto',
        preserveModules: true,
      },
    },
  },
});
