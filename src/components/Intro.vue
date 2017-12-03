<template>
<div class="intro">
  <section v-if="isExpanded" class="intro-section">
    <h2 class="m0 p0">Browse for Art</h2>
    <p>
      Click and drag on the window below to navigate the experience.<br>
      Use the WASD keys to move through space. Point the cursor to select objects.
    </p>
  </section>
  <button @click="toggleIntro()" class="btn-hide">{{infoBtnText}}</button>
</div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    infoBtnText() {
      return this.isExpanded ? 'Got it, Thanks' : 'Show Info';
    },
  },
  methods: {
    toggleIntro() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style>
.intro-section {
  padding: 1rem;
}

.btn-hide {
  background-color: #6c5070;
  color: white;
  font-weight: bold;
  letter-spacing: .2em;
  text-transform: uppercase;
}
</style>
