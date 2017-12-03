<template>
  <div id="app">
    <header class="header">
      <router-link to="/" class="nav-link">
      <h1 class="logo">overstockArt.com</h1>
      </router-link>
      <nav class="nav">
        <ul class="nav-links">
          <li class="nav-link">
          <router-link to="/scene">Vincent</router-link>
          </li>
          <li class="nav-link">
          <router-link to="/#">Claude</router-link>
          </li>
          <li class="nav-link">
          <router-link to="/#">Monet</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <intro/>
      <router-link to="/test">Test</router-link>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Intro from '@/components/Intro';

export default {
  name: 'app',
  components: {
    Intro,
  },
};
</script>

<style src="./styles/global.scss" lang="scss"></style>
