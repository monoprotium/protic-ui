<template>
    <div class="icon-wrapper">
        <component :is="selectedComponent" :style="iconStyle" />
    </div>
</template>
  
<script setup lang="ts">
import { watch,  withDefaults, toRefs, shallowRef, computed } from 'vue';
import { PrtIconSize } from './types';

// type that includes the keys of the PrtIconSize enum
type SizeProp = keyof typeof PrtIconSize;

const props = withDefaults(defineProps<{
    iconComponent: string;
    color?: string;
    size?: SizeProp;
}>(), {
    size: 'base', // String key of the enum
    color: 'white', // hex color
    iconComponent: 'accept',
});

const { iconComponent, color, size } = toRefs(props);

const selectedComponent = shallowRef(null);
const iconCache: Record<string, any> = {};

const loadIconComponent = (iconName: string) => iconCache[iconName]
    ? Promise.resolve(iconCache[iconName])
    : import(`./_internal/${iconName}.vue`)
        .then((component) => (iconCache[iconName] = component.default, component.default))
        .catch((error) => (console.log(error, `Icon component "${iconName}" could not be loaded.`), null));



watch(iconComponent, async (newVal) => {
    selectedComponent.value = await loadIconComponent(newVal);
}, { immediate: true });

// Convert the size prop to the pixel value
const computedSize = computed(() => {
    const sizeValue = size.value;
    // Check if sizeValue is a key of the PrtIconSize enum
    if (typeof sizeValue === 'string' && sizeValue in PrtIconSize) {
        return PrtIconSize[sizeValue as SizeProp];
    }
    return sizeValue;
});

const iconStyle = computed(() => ({
    '--icon-color': color.value,
    '--icon-width': computedSize.value,
    '--icon-height': computedSize.value,
}));
</script>
