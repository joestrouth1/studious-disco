<template>
  <div id="app">

<!--     <header v-if="headerVisible" class="header">
      <h1 class="logo nav-link">
      <router-link to="/">
        overstockArt.com
      </router-link>
      </h1>
      <nav class="nav">
        <ul class="nav-links">
          <li class="nav-link">
          <router-link to="/scene">View Scene</router-link>
          </li>
        </ul>
      </nav>
      <intro/>
    </header> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Intro from '@/components/Intro';

export default {
  name: 'app',
  data() {
    return {
      headerVisible: true,
    };
  },
  methods: {
    toggleHeader() {
      this.headerVisible = !this.headerVisible;
    },
  },
  components: {
    Intro,
  },
};
</script>

<style src="./styles/global.scss" lang="scss"></style>
