<script setup lang="ts">
import {  type ConcreteComponent, computed, toRefs,  withDefaults } from 'vue';
import { PrtBtnSize, PrtBtnVariant } from './types';



const props = withDefaults(defineProps<{
  size: `${PrtBtnSize}`;
  variant: `${PrtBtnVariant}`;
  disabled: boolean;
  square: boolean;
  tag: string | ConcreteComponent;
  loading: boolean;
  fullWidth: boolean;
  color: string;
}>(), {
  size: PrtBtnSize.base,
  variant: PrtBtnVariant.solid,
  disabled: false,
  square: false,
  tag: 'button',
  loading: false,
  fullWidth: false,
  color: 'bg-el-7',
});

const { size, square, tag, variant, fullWidth, loading, disabled, color } = toRefs(props);

const sizeClass = computed(() => {
  const base = 'text-center';
  const padding = square.value ? 'p-2' : 'py-2 px-4';
  const minWidth = square.value ? 'min-w-10.5' : '';
  const textSize = size.value === PrtBtnSize.sm ? 'text-sm' : 'text-base';
  const paddingSize = {
    [PrtBtnSize.base]: padding,
    [PrtBtnSize.sm]: square.value ? 'p-1.5 min-w-8.5' : 'py-1.5 px-3',
    [PrtBtnSize.lg]: square.value ? 'p-4 min-w-14.5' : 'py-3 px-6',
  };
  return `inline-flex items-center justify-center font-medium transition-colors duration-150 rounded ${base} ${minWidth} ${textSize} ${paddingSize[size.value]}`;
});

const variantClass = computed(() => {
  const variantColor = color.value.replace('bg-', '');
  const variantColorOpposite = "white";
  const isDisabled = disabled.value;
  const textColor = isDisabled ? 'text-gray-400' : 'text-white';


  const backgroundColor = isDisabled ? 'bg-gray-500' : color.value;
  const borderColor = `border-${variantColor}`;
  const focusStyles = `focus:ring-2 focus:ring-offset-2 focus:ring-${variantColor} focus:ring-opacity-50`;

  const styleMap = {
    [PrtBtnVariant.solid]: `${textColor} ${backgroundColor} hover:bg-opacity-90 ${focusStyles}`,
    [PrtBtnVariant.outline]: `bg-transparent ${borderColor} hover:text-${variantColorOpposite} text-${variantColor} hover:bg-${variantColor} ${focusStyles}`,
    [PrtBtnVariant.ghost]: `text-${variantColor} bg-transparent hover:bg-${variantColor} hover:text-${variantColorOpposite} ${focusStyles}`,
  };

  return styleMap[variant.value] || '';
});

const buttonClasses = computed(() => {
  const baseClasses = `${sizeClass.value} ${fullWidth.value ? 'w-full' : ''} ${disabled.value ? 'opacity-50 cursor-not-allowed' : ''} ${loading.value ? 'cursor-wait' : ''}`;
  return `${baseClasses} ${variantClass.value}`.trim();
});

const componentTag = computed(() => tag.value || 'button');
</script>

<template>
  <component :is="componentTag" :type="componentTag" :disabled="props.disabled" :class="buttonClasses" data-testid="button">
    <slot name="prepend"  v-if="$slots.prepend" />
    <slot />
    <slot name="append" v-if="$slots.append" />
  </component>
</template>
