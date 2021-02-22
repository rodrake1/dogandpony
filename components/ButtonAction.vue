<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'px-4 py-2 text-white rounded transition-colors ease-in-out',
      disabled ? 'bg-gray' : 'bg-blue hover:bg-blue-dark',
    ]"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>