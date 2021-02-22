<template>
  <div :class="['shadow rounded-lg bg-white', { open }]">
    <header
      class="flex justify-between items-center w-80 p-6 rounded-t-lg transition-colors animation cursor-pointer"
      @click="toggle"
    >
      <div class="text-left">
        <h1 class="text-2xl font-bold transition-colors animation">
          {{ value.title }}
        </h1>

        <h2 class="text-gray transition-colors animation">
          {{ value.address }}
        </h2>
      </div>

      <icon
        icon="chevron-down"
        width="18"
        height="10"
        :auxClass="[
          'transition-transform animation',
          open ? 'transform -rotate-180' : '',
        ]"
        :color="open ? 'white' : 'blue'"
      />
    </header>

    <main class="max-h-0 overflow-hidden transition-max-height animation">
      <div class="px-8 py-6 opacity-0 transition-opacity animation">
        <p class="text-xl font-bold">{{ value.name }}</p>

        <p class="mt-2">{{ value.job }}</p>

        <p class="mt-2 text-blue">{{ value.email }}</p>

        <p class="mt-2">{{ value.phone }}</p>

        <divider />

        <div class="flex justify-between">
          <button-icon label="edit" icon="pencil" color="gray" @click="$emit('edit')" />

          <button-icon
            label="delete"
            icon="trash"
            color="red"
            @click="$emit('remove')"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="postcss" scoped>
.open header {
  @apply bg-gray;
}

.open h1,
.open h2 {
  @apply text-white;
}

.open main {
  @apply max-h-60 transition-max-height animation;
}

.open main > div {
  @apply opacity-100;
}

.animation {
  @apply duration-700 ease-in-out;
}
</style>