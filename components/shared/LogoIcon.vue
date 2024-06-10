<template>
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" :width="props.size" height="48.000000pt"
    viewBox="0 0 84.000000 84.000000" preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)" :fill="props.color" stroke="none">
      <path d="M295 661 l-110 -27 0 -129 c0 -83 5 -148 14 -179 19 -66 70 -116 154
-151 l67 -28 68 28 c135 57 166 120 167 335 l0 124 -95 23 c-143 33 -147 33
-265 4z m150 -121 c3 -5 -6 -30 -20 -55 l-27 -45 41 0 c26 0 44 -5 47 -13 5
-15 -63 -137 -77 -137 -20 0 -18 22 6 59 14 23 25 43 25 46 0 3 -18 5 -39 5
-22 0 -43 4 -46 10 -6 10 64 140 77 140 4 0 10 -4 13 -10z" />
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  color: string;
  size: string;
}

const props = defineProps<Props>();
</script>