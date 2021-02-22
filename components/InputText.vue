<template>
  <div>
    <div class="relative">
      <input
        type="text"
        :value="text"
        :placeholder="placeholder"
        :class="[
          'w-full h-10 m-0 px-3 border-1 border-gray rounded shadow-input',
          {
            'border-blue-dark': text,
            'border-red': isInvalid,
            'focus:border-blue': !isInvalid,
          },
        ]"
        @blur="v.$touch"
        @input="onInput"
      />

      <icon
        icon="exclamation-circle"
        width="16"
        height="16"
        color="red"
        class="absolute top-1/2 right-3 transform -translate-y-1/2"
        v-if="isInvalid"
      />
    </div>

    <p class="mt-2px text-sm text-red" v-if="isInvalid">
      This field cannot be empty
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
    v: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: this.value,
    };
  },
  computed: {
    isInvalid() {
      return this.v.$dirty && !this.v.required;
    },
  },
  methods: {
    onInput(event) {
      const text = event.target.value;

      this.text = text;
      this.v.$touch();
      this.$emit("input", text);
    },
  },
};
</script>
