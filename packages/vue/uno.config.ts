import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

const generateRules = (map) => {
  let rules = [];
  for (let [prefix, property] of Object.entries(map)) {
    rules.push([
      new RegExp(`^${prefix}-\\[(\\d+)(px|rem|%)\\]$`),
      ([_, num, unit]) => ({ [property]: `${num}${unit}` })
    ]);
  }
  return rules;
}

const map = { 'p': 'padding', 'pr': 'padding-right', 'pl': 'padding-left', 'pt': 'padding-top', 'pb': 'padding-bottom', 'm': 'margin', 'mr': 'margin-right', 'ml': 'margin-left', 'mt': 'margin-top', 'mb': 'margin-bottom', 'w': 'width', 'h': 'height', 'min-h': 'min-height', 'max-h': 'max-height', 'min-w': 'min-width', 'max-w': 'max-width', 't': 'top', 'b': 'bottom', 'r': 'right', 'l': 'left' };


// types

type Suffix = number | string;
interface ColorClassMap {
    [key: string]: Suffix[];
}

const colorClasses: ColorClassMap = {
  'bg-el': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'border-el': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'text-el': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'bg-blk': [1, 2, 3],
  'text-accent': [1, 2],
  'text-state': ['success', 'error', 'warning', 'info', 'disabled'],
  'bg-brand': ['primary'],
  'text':['white'],
  'mt':[1,2],
  'mr':[1,2],
  'ml':[1,2]
};


// safelist
export const safelist: string[] = [];



// generate safelist
Object.entries(colorClasses).forEach(([prefix, suffixes]) => {

  suffixes.forEach((suffix: Suffix) => {
      safelist.push(`${prefix}-${suffix}`);
      safelist.push(`hover:${prefix}-${suffix}`);
  });
});


export default defineConfig({

  safelist,

  theme: {

    breakpoints: {
      sm: '320px',
      md: '640px',
    },
    colors: {


      'blk': {
        1: '#111827', // class="bg-blk-1"
        2: '#1F2937', // class="bg-blk-2"
        3: '#374151', // class="bg-blk-3"
      },
      'el': {
        1: '#334155', // class="bg-el-1" 
        2: '#1E293B', // class="bg-el-2" 
        3: '#064E3B', // class="bg-el-3" 
        4: '#7C3AED', // class="bg-el-4" 
        5: '#DB2777', // class="bg-el-5" 
        6: '#059669', // class="bg-el-6" 
        7: '#0284C7', // class="bg-el-7" 
        8: '#DC2626', // class="bg-el-8" 
        9: '#D97706', // class="bg-el-9" 
        10: '#0EA5E9', // class="bg-el-10" 
      },

      'accent': {
        1: '#6B7280', // class="text-accent-1"
        2: '#FBBF24', // class="text-accent-2"
      },
      'state': {
        'success': '#4ADE80', // class="text-state-success"
        'error': '#EF4444',   // class="text-state-error"
        'warning': '#F59E0B', // class="text-state-warning"
        'info': '#60A5FA',    // class="text-state-info",
        'disabled': '#60A5FA',    // class="text-state-info"
      },

      'brand': {
        'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"

      }
    },
  },

  rules: [
    ['px-100', { 'padding-left': '100px', 'padding-right': '100px' }],
    ...generateRules(map),
    ['custom-rule', { color: 'red' }],
  ],
  shortcuts: [{ 
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
    'custom-btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    // dynamic shortcuts
  },
  [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],

  ],

  // fix for storybook
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Include Storybook stories
        'src/**/*.stories.{js,ts}',
        'stories/**/*',
      ],
    },
  },


  presets: [
    // presetUnocssUI(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
});
