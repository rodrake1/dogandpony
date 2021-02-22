<template>
  <svg :class="['w-min', ...auxClass]" :width="width" :height="height">
    <component :is="loadIcon" :color="color"></component>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "24",
    },
    height: {
      type: String,
      default: "24",
    },
    color: {
      type: String,
      default: "current",
    },
    auxClass: Array,
  },
  computed: {
    loadIcon() {
      return () => import(`~/components/icons/${this.icon}.vue`);
    },
  },
};
</script>