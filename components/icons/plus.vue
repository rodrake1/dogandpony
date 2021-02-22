<template>
  <g>
    <line
      x1="9"
      y1="5.37286e-08"
      x2="9"
      y2="16"
      fill="none"
      :class="`stroke-${color}`"
    />
    <line
      x1="16.5"
      y1="8.5"
      x2="0.5"
      y2="8.5"
      fill="none"
      :class="`stroke-${color}`"
    />
  </g>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>