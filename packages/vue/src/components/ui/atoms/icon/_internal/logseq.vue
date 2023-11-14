<template>
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <ellipse :style="styleObject" cx="11.0636" cy="12.0738" rx="5.9788" ry="7.4027"
      transform="translate(-4.6156 7.347) rotate(-30.7236)" stroke-width="2px" />
    <ellipse :style="styleObject" cx="27.007" cy="8.8296" rx="6.1268" ry="4.1578"
      transform="translate(-1.3777 7.5448) rotate(-15.5129)" stroke-width="2px" />
    <ellipse :style="styleObject" cx="27.9826" cy="30.172" rx="13.3119" ry="15.3472"
      transform="translate(-4.4134 55.5468) rotate(-85.2266)" stroke-width="2px" />
  </svg>
</template>
  
<script setup lang="ts">
const styleObject: Record<string, string> = {
  fill: 'white',
  stroke: 'white',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
</script>
  


<style scoped>  
    svg {
      fill: var(--icon-color, white);
      width: var(--icon-width);
      height: var(--icon-height);
     }
</style>