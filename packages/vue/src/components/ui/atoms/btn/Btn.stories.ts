import type { Meta, StoryFn } from '@storybook/vue3';
import PrtBtn from './PrtBtn.vue';
import PrtIcon from '../icon/PrtIcon.vue';

import { PrtBtnSize, PrtBtnVariant } from './types';


const meta: Meta<typeof PrtBtn> = {
  title: 'Components/PrtBtn',
  component: PrtBtn,
  argTypes: {
    size: {
      options: Object.values(PrtBtnSize),
      control: { type: 'select' },
    },
    variant: {
      options: Object.values(PrtBtnVariant),
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    square: {
      control: { type: 'boolean' },
    },
    tag: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;



const Template: StoryFn<typeof PrtBtn> = (args) => ({
  components: { PrtBtn },
  slots: {
    default: 'Add new',
  },
  setup() {
    return { args };
  },
  template: `
    <PrtBtn v-bind="args">
      <template #default>{{ args.default }}</template>
    </PrtBtn>
  `,
});



// LargeSolid Story
export const LargeSolid = Template.bind({});
LargeSolid.args = {
  size: PrtBtnSize.lg,
  variant: PrtBtnVariant.solid,
  color: 'bg-el-6',
  default: 'Large Button',
};



// BaseSolid Story
export const BaseSolid = Template.bind({});
BaseSolid.args = {
  variant: PrtBtnVariant.solid,
  color: 'bg-el-6',
  default: 'Base Button',
};

// SmallSolid Story
export const SmallSolid = Template.bind({});
SmallSolid.args = {
  size: PrtBtnSize.sm,
  variant: PrtBtnVariant.solid,
  color: 'bg-el-6',
  default: 'Small Button',
};

// LargeOutline Story
export const LargeOutline = Template.bind({});
LargeOutline.args = {
  size: PrtBtnSize.lg,
  variant: PrtBtnVariant.outline,
  color: 'bg-el-6',
  default: 'Large Outline Button',
};

// BaseOutline Story
export const BaseOutline = Template.bind({});
BaseOutline.args = {
  size: PrtBtnSize.base,
  variant: PrtBtnVariant.outline,
  color: 'bg-el-6',
  default: 'Base Outline Button',
};

// SmallOutline Story
export const SmallOutline = Template.bind({});
SmallOutline.args = {
  size: PrtBtnSize.sm,
  variant: PrtBtnVariant.outline,
  color: 'bg-el-6',
  default: 'Small Outline Button',
};

// LargeGhost Story
export const LargeGhost = Template.bind({});
LargeGhost.args = {
  size: PrtBtnSize.lg,
  variant: PrtBtnVariant.ghost,
  color: 'bg-el-6',
  default: 'Large Ghost Button',
};

// BaseGhost Story
export const BaseGhost = Template.bind({});
BaseGhost.args = {
  size: PrtBtnSize.base,
  variant: PrtBtnVariant.ghost,
  color: 'bg-el-6',
  default: 'Base Ghost Button',
};

// SmallGhost Story
export const SmallGhost = Template.bind({});
SmallGhost.args = {
  size: PrtBtnSize.sm,
  variant: PrtBtnVariant.ghost,
  color: 'bg-el-6',
  default: 'Small Ghost Button',
};

// DisabledButton Story
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  default: 'Disabled Button',
};

// SquareButtonLarge Story
export const SquareButtonLarge = Template.bind({});
SquareButtonLarge.args = {
  size: PrtBtnSize.lg,
  square: true,
  default: 'L',
};

// LinkButton Story
export const LinkButton = Template.bind({});
LinkButton.args = {
  tag: 'a',
  default: 'Link as Button',
};

// LoadingButton Story
export const LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true,
  default: 'Loading Button',
};

// FullWidthButton Story
export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  fullWidth: true,
  default: 'Full Width Button',
};

//  Prepend icon Story
export const WithPrependIcon = Template.bind({});
WithPrependIcon.args = {
  default: 'Click me',
};
WithPrependIcon.decorators = [
  (story) => ({
    components: { PrtBtn, PrtIcon, story },
    template: `
      <PrtBtn>
        <template #prepend>
          <PrtIcon class="mt-1 mr-2" size="base" iconComponent="accept" desc="Accept" />
        </template>
        Click me
      </PrtBtn>
    `,
  }),
];

//  append icon Story
export const WithAppendIcon = Template.bind({});
WithAppendIcon.args = {
  default: 'Click me',
};
WithAppendIcon.decorators = [
  (story) => ({
    components: { PrtBtn, PrtIcon, story },
    template: `
      <PrtBtn>
        Click me
        <template #append>
          <PrtIcon class="mt-1 ml-2" size="base" iconComponent="x" desc="Cancel" />
        </template>
      </PrtBtn>
    `,
  }),
];

// Prepend and append icons Story
export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  default: 'Click me',
};
WithBothIcons.decorators = [
  (story) => ({
    components: { PrtBtn, PrtIcon, story },
    template: `
      <PrtBtn>
        <template #prepend>
          <PrtIcon class="mt-1 mr-2" size="base" iconComponent="accept" desc="Accept" />
        </template>
        Click me
        <template #append>
          <PrtIcon class="mt-1 ml-2" size="base" iconComponent="x" desc="Cancel" />
        </template>
      </PrtBtn>
    `,
  }),
];