<!-- components/Navigation.vue -->
<template>
    <nav class="navigation">
      <NuxtLink to="/" class="nav-button" :class="{ active: $route.path === '/' }">
        Главная
      </NuxtLink>
      <NuxtLink to="/about" class="nav-button" :class="{ active: $route.path === '/about' }">
        О компании
      </NuxtLink>
    </nav>
  </template>
  
  <style scoped>
  .navigation {
    background: linear-gradient(135deg, #007bff, #00c4cc);
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
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
  </style>