<template>
  <g>
    <path
      d="M.462 11.538L11.538.462zm0-11.076l11.076 11.076z"
      fill="none"
      :class="`stroke-${color}`"
    />
    <path
      d="M.462.462l11.076 11.076m-11.076 0L11.538.462z"
      stroke-linecap="round"
      stroke-linejoin="round"
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