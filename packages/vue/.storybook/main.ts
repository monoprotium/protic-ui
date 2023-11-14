import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: [
    '../src/components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/ui/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/ui/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/ui/organisms/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['public'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },

};
export default config;
