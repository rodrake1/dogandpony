<template>
  <div class="w-min mx-auto">
    <p class="mb-12 text-center text-header text-blue font-light">Offices</p>

    <transition name="fade">
      <button-add
        label="Add New Location"
        v-if="!showNewLocationForm"
        @click="openNewLocationForm"
      />
    </transition>

    <transition name="fade">
      <office-form
        v-if="showNewLocationForm"
        :editMode="!showNewLocationForm"
        @close="showNewLocationForm = false"
        @save="addLocation"
      />
    </transition>

    <div v-for="(office, index) in offices" :key="office.name">
      <transition name="fade">
        <office-card
          class="mt-6"
          v-if="!(showEditLocationForm && selectedCard === index)"
          :ref="index"
          :value="office"
          @toggle="onToggleCard(index)"
          @edit="openEditLocationForm"
          @remove="removeLocation"
        />
      </transition>

      <transition name="fade">
        <office-form
          class="mt-6"
          v-if="showEditLocationForm && selectedCard === index"
          :value="office"
          :editMode="showEditLocationForm && selectedCard === index"
          @close="selectedCard = null"
          @save="updateLocation"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNewLocationForm: false,
      showEditLocationForm: false,
      selectedCard: null,
    };
  },
  computed: {
    offices() {
      return this.$store.state.offices;
    },
  },
  methods: {
    onToggleCard(index) {
      this.showEditLocationForm = false;
      this.selectedCard = index;
      this.closeCards();
    },
    openNewLocationForm() {
      this.showNewLocationForm = true;
      this.showEditLocationForm = false;
      this.selectedCard = null;
      this.closeCards();
    },
    openEditLocationForm() {
      this.showNewLocationForm = false;
      this.showEditLocationForm = true;
      this.closeCards();
    },
    removeLocation() {
      this.$store.commit("removeOffice", this.selectedCard);
      this.selectedCard = null;
      this.closeCards();
    },
    addLocation(office) {
      this.$store.commit("addOffice", office);
    },
    updateLocation(office) {
      this.$store.commit("updateOffice", { office, index: this.selectedCard });
    },
    closeCards() {
      const cards = this.$refs;

      for (const cardIndex in cards) {
        const card = cards[cardIndex][0];
        const notSelectedCard = card && cardIndex != this.selectedCard;

        if (notSelectedCard) {
          card.open = false;
        }
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.fade-enter-active {
  transition: opacity 0.7s;
}

.fade-leave-active {
  transition: opacity;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>