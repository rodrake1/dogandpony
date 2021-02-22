<template>
  <path
    d="M1 1l8 8 8-8"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    :class="`stroke-${color}`"
  />
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>