<template>
  <path
    d="M10 11v6m4-6v6M4 7h16m-1 0l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7h14zm-4 0V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3h6z"
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