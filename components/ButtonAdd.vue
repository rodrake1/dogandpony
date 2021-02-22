<template>
  <button
    type="button"
    class="flex justify-between items-center w-80 px-6 py-4 shadow bg-blue rounded-lg hover:bg-blue-dark text-gray-light transition-colors ease-in-out"
    @click="$emit('click')"
  >
    <span>
      {{ label }}
    </span>

    <icon icon="plus" width="16" height="16" color="white" />
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: String,
  },
};
</script>
