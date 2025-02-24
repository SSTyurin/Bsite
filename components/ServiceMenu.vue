<!-- components/ServiceMenu.vue -->
<template>
  <div class="service-menu">
    <h2 class="menu-title">Наши услуги</h2>
    <div class="menu-items">
      <button
        v-for="service in services"
        :key="service.id"
        @click="$emit('select-service', service)"
        :class="['menu-button', { active: selectedService?.id === service.id }]"
      >
        {{ service.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedService: Object
  },
  data() {
    return {
      services: [
        { id: 1, name: 'Разработка лекарств', description: 'Создание инновационных медикаментов с использованием биотехнологий.' },
        { id: 2, name: 'Генная инженерия', description: 'Модификация генов для лечения наследственных заболеваний.' },
        { id: 3, name: 'Клинические испытания', description: 'Полный цикл тестирования новых препаратов.' }
      ]
    }
  }
}
</script>

<style scoped>
.service-menu {
  padding: 2rem;
  background: linear-gradient(135deg, #007bff, #00c4cc);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.menu-title {
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
.menu-items {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.menu-button {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.menu-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}
.menu-button.active {
  background: white;
  color: #007bff;
}
</style>