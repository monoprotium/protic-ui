import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PrtBtn from './PrtBtn.vue';
import { PrtBtnSize, PrtBtnVariant } from './types';

// Default props
const defaultProps = {
  size: PrtBtnSize.base,
  variant: PrtBtnVariant.solid,
  disabled: false,
  square: false,
  tag: 'button',
  loading: false,
  fullWidth: false,
  color: 'bg-el-7',
};

describe('PrtBtn', () => {
  // Initial State
  it('matches the initial state snapshot', () => {
    const wrapper = mount(PrtBtn, {
      props: defaultProps,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  // Sizes Classes
  it.each(Object.values(PrtBtnSize))('renders the correct size for size variant %s', (size) => {
    const wrapper = mount(PrtBtn, {
      props: { ...defaultProps, size },
    });

    const expectedClass = {
      [PrtBtnSize.sm]: 'text-sm',
      [PrtBtnSize.base]:  'text-base', 
      [PrtBtnSize.lg]: 'text-base', 
    };
    expect(wrapper.classes()).toContain(expectedClass[size]);
  });

  // Variant Classes
  it.each(Object.values(PrtBtnVariant))('renders the correct styling for variant %s', (variant) => {
    const wrapper = mount(PrtBtn, {
      props: { ...defaultProps, variant },
    });
  
    // Check for the correct classes applied to the component
    const expectedClasses = {
      [PrtBtnVariant.solid]: ['text-white', 'bg-el-7', 'hover:bg-opacity-90', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-el-7', 'focus:ring-opacity-50'],
      [PrtBtnVariant.outline]: ['bg-transparent', 'border-el-7', 'hover:text-white', 'text-el-7', 'hover:bg-el-7', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-el-7', 'focus:ring-opacity-50'],
      [PrtBtnVariant.ghost]: ['text-el-7', 'bg-transparent', 'hover:bg-el-7', 'hover:text-white', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-el-7', 'focus:ring-opacity-50'],
    };
  
    expectedClasses[variant].forEach((expectedClass) => {
      expect(wrapper.classes()).toContain(expectedClass);
    });
  });
  // Disabled State
  it('renders in a disabled state when disabled prop is true', () => {
    const wrapper = mount(PrtBtn, {
      props: { ...defaultProps, disabled: true },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  // Square Button
  it('renders as a square button when square prop is true', () => {
    const wrapper = mount(PrtBtn, {
      props: { ...defaultProps, square: true },
    });

    const expectedClasses = ['p-2', 'min-w-10.5'];

    expectedClasses.forEach((expectedClass) => {
      expect(wrapper.classes()).toContain(expectedClass);
    });
  });



  // Prepend Slot
  it('displays the button with the specified prepend slot', () => {
    const wrapper = mount(PrtBtn, {
      props: defaultProps,
      slots: {
        prepend: '<span>Prepend</span>',
      },
    });
    expect(wrapper.html()).toContain('Prepend');
  });

  // Append Slot
  it('displays the button with the specified append slot', () => {
    const wrapper = mount(PrtBtn, {
      props: defaultProps,
      slots: {
        append: '<span>Append</span>',
      },
    });
    expect(wrapper.html()).toContain('Append');
  });

  // Prepend, Append, and Default Content
  it('displays the button with prepend, append, and default slots', () => {
    const wrapper = mount(PrtBtn, {
      props: defaultProps,
      slots: {
        prepend: '<span>Prepend</span>',
        append: '<span>Append</span>',
        default: '<span>Content</span>', 
      },
    });

    expect(wrapper.html()).toContain('<span>Prepend</span>');
    expect(wrapper.html()).toContain('<span>Append</span>');
    expect(wrapper.html()).toContain('<span>Content</span>');
  });

});
