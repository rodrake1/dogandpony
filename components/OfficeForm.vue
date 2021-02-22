<template>
  <div class="w-80 pt-4 px-6 pb-6 shadow rounded-lg bg-white">
    <header class="flex justify-between items-center">
      <p class="font-bold">{{ editMode ? "Edit" : "New" }} Location</p>

      <button @click="close">
        <icon icon="x" width="12" height="12" color="gray" />
      </button>
    </header>

    <main class="mt-10">
      <label class="block">Title *</label>
      <input-text class="mt-2px" v-model="title" :v="$v.title" />

      <label class="block mt-6">Enter the address *</label>
      <input-text class="mt-2px" v-model="address" :v="$v.address" />

      <p class="mt-6 text-xs text-blue">CONTACT INFORMATION</p>

      <divider />

      <label class="block mt-6">Full name *</label>
      <input-text class="mt-2px" v-model="name" :v="$v.name" />

      <label class="block mt-6">Job position *</label>
      <input-text class="mt-2px" v-model="job" :v="$v.job" />

      <label class="block mt-6">Email address *</label>
      <input-text
        class="mt-2px"
        placeholder="name@example.com"
        v-model="email"
        :v="$v.email"
      />

      <label class="block mt-6">Phone *</label>
      <input-text
        class="mt-2px"
        placeholder="(xxx) xxx-xxxx"
        v-model="phone"
        :v="$v.phone"
      />

      <button-action
        class="mt-6"
        label="Save"
        @click="save()"
        :disabled="isButtonDisabled"
      />
    </main>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => ({
        title: "",
        address: "",
        name: "",
        job: "",
        email: "",
        phone: "",
      }),
    },
  },
  data() {
    return {
      title: this.value.title,
      address: this.value.address,
      name: this.value.name,
      job: this.value.job,
      email: this.value.email,
      phone: this.value.phone,
    };
  },
  computed: {
    isButtonDisabled() {
      return this.$v.$invalid || !this.$v.$anyDirty;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      const office = {
        title: this.title,
        address: this.address,
        name: this.name,
        job: this.job,
        email: this.email,
        phone: this.phone,
      };

      this.$emit("save", office);
      this.close();
    },
  },
  validations: {
    title: { required },
    address: { required },
    name: { required },
    job: { required },
    email: { required },
    phone: { required },
  },
};
</script>