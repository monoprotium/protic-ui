import type { Preview } from "@storybook/vue3";


import { setup } from '@storybook/vue3';

import { createPinia } from 'pinia';
// import '@unocss/reset/tailwind.css';


import '../src/style.css';
// import '../src/tailwind.css';

import 'virtual:uno.css'


import 'uno.css';


// import { safelist } from '../uno.config'; // Adjust the path as needed

//👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
setup((app) => {
  app.use(createPinia());
});


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    // styles: {
    //   extend: [
    //     ...safelist.map(className => `.${className} {}`),
    //     // You can add additional styles or overrides here
    //   ],
    // },

  },
};

export default preview;
