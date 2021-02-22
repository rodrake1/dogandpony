<template>
  <path
    d="M5 13l4 4L19 7"
    stroke-width="2"
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