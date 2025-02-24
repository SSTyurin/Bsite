<!-- layouts/default.vue -->
<template>
  <div class="layout">
    <Navigation />
    <slot />
    <footer class="footer">
      <p>Свяжитесь с нами: +7 (999) 123-45-67</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f0f8ff, #ffffff);
}
.footer {
  margin-top: auto;
  padding: 2rem;
  text-align: center;
  background: #007bff;
  color: white;
}
</style>