<!-- components/Navigation.vue -->
<template>
  <nav class="navigation">
    <div class="nav-links">
      <NuxtLink to="/" class="nav-button" :class="{ active: $route.path === '/' }">
        {{ $t('home') }}
      </NuxtLink>
      <NuxtLink to="/about" class="nav-button" :class="{ active: $route.path === '/about' }">
        {{ $t('about') }}
      </NuxtLink>
    </div>
    <select v-model="$i18n.locale" class="lang-switcher" @change="switchLocale">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  </nav>
</template>

<script>
export default {
  methods: {
    switchLocale() {
      this.$i18n.setLocale(this.$i18n.locale)
    }
  }
}
</script>

<style scoped>
.navigation {
  background: linear-gradient(135deg, #007bff, #00c4cc);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-button {
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: bold;
}
.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}
.nav-button.active {
  background: white;
  color: #007bff;
}
.lang-switcher {
  padding: 0.5rem;
  background: white;
  border: none;
  border-radius: 10px;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
.lang-switcher:hover {
  background: rgba(255, 255, 255, 0.9);
}
</style>