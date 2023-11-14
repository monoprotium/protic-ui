// Icon.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import PrtIcon from './PrtIcon.vue';
import { PrtIconSize } from './types';
import { retry } from '../../../../tests/utils'; 



describe('PrtIcon', () => {
  let wrapper: VueWrapper<InstanceType<typeof PrtIcon>>;

  beforeEach(async () => {
    wrapper = mount(PrtIcon, {
      props: {
        iconComponent: 'accept',
        size: 'base',
        color: 'white',
      },
    });

    // Simulate asynchronous behavior with setTimeout
    // await new Promise((resolve) => setTimeout(resolve, 100));
    // Wait for the dynamic import to resolve
    // await wrapper.vm.$nextTick();


  });

  it('renders SVG correctly', async () => {
    await retry(() => {

      const svgElement = wrapper.find('svg');
      // Add logging to check the rendered HTML
      // console.log(wrapper.html());


      expect(svgElement.exists()).toBe(true);

      const pathElement = svgElement.find('path');
      expect(pathElement.exists()).toBe(true);
      expect(svgElement.attributes('xmlns')).toBe('http://www.w3.org/2000/svg');
      expect(svgElement.attributes('height')).toBe('1em');
      expect(svgElement.attributes('viewBox')).toBe('0 0 512 512')
    });
  });

  it('applies correct styles to SVG', async () => {
    await retry(() => {
      wrapper.setProps({ color: 'red', size: 'lg' });


      const svgElement = wrapper.find('svg');
  
      // console.log(wrapper.html());


      expect(svgElement.exists()).toBe(true);
      expect(svgElement.attributes('style')).toContain('--icon-color: red');
      expect(svgElement.attributes('style')).toContain(`--icon-width: ${PrtIconSize['lg']}`);
      expect(svgElement.attributes('style')).toContain(`--icon-height: ${PrtIconSize['lg']}`);
    });
  });

});
