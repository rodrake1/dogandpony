<template>
  <button
    type="button"
    :class="[`flex gap-2 items-center text-${color}`]"
    @click="$emit('click')"
  >
    <icon :icon="icon" />

    <span class="text-xs uppercase">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "current",
    },
  },
};
</script>
