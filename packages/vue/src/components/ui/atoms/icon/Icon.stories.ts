// Imports
import type { Meta, StoryObj } from '@storybook/vue3';
import {PrtIcon} from './index.ts';
import { PrtIconSize } from './types';

// Dynamic import of icons _internal components 
const importIcons = import.meta.globEager("./_internal/*.vue");

// Component names
const componentNames: string[] = Object.keys(importIcons).map((path: string) => {
  return path.split('/').pop()!.replace('.vue', '');
});

// Meta
const meta: Meta<typeof PrtIcon> = {
  title: 'Components/PrtIcon',
  component: PrtIcon,
  argTypes: {
    iconComponent: {
      options: componentNames,
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
    size: {
      options: Object.keys(PrtIconSize),
      control: { type: 'select' },
    },
  },
};

export default meta;


type Story = StoryObj<typeof PrtIcon>;

// Default story
export const Default: Story = {
  args: {
    iconComponent: 'accept',
    color: 'white',
    size: 'base',
  },
};

// Size stories
export const SizeXS: Story = {
  args: {
    ...Default.args,
    size: 'xs',
  },
  name: 'Size XS',
};

export const SizeSM: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
  name: 'Size SM',
};



// Color story
export const ColorOptions: Story = {
  args: {
    ...Default.args,
  },
  argTypes: {
    color: {
      options: ['white', 'teal', '#FF0000', '#00FF00', '#0000FF'], 
      control: { type: 'select' },
    },
  },
};
