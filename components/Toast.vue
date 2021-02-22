<template>
  <div
    :class="[
      'absolute top-0 overflow-hidden w-full h-0 transition-height animation',
      { show },
    ]"
  >
    <div
      class="flex gap-4 justify-center items-center h-full border-t-2 border-blue bg-white"
    >
      <icon icon="check" color="blue" />

      <span class="text-xs">THE LOCATION HAS BEEN UPDATED.</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    show() {
      return this.$store.state.toast;
    },
  },
  watch: {
    show(toastIsVisible) {
      setTimeout(() => {
        if (toastIsVisible) {
          this.$store.commit("hideToast");
        }
      }, this.duration);
    },
  },
};
</script>

<style lang="postcss"  scoped>
.show {
  @apply h-20 transition-height animation;
}

.animation {
  @apply duration-300 ease-in-out;
}
</style>