<template>
  <div class="home">
    <h1>overstockArt.com</h1>
    <h3>Browse for Art</h3>
    <ul>
      <li>Click and drag to look.</li>
      <li>Use the arrow or WASD keys to move.</li>
      <li>Interact with things by looking at them.</li>
    </ul>
    <router-link to="/scene">
    <button>Got it, let's go</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto; 
}
button {
  background-color: #6c5070;
  color: white;
  text-transform: uppercase;
  letter-spacing: .125rem;
  font-weight: bold;
  border-radius: .25rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(25, 25, 0, .25)
}
</style>

