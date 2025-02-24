<!-- pages/index.vue -->
<template>
  <div class="container">
    <h1 class="title">BioTech Innovations</h1>
    <p class="subtitle">Передовые решения в биотехнологиях для медицины будущего</p>
    <ServiceMenu :selected-service="selectedService" @select-service="selectService" />
    <ServiceDescription :service="selectedService" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedService: null
    }
  },
  methods: {
    selectService(service) {
      this.selectedService = service
    }
  }
}
</script>

<style scoped>
.container {
  padding: 4rem 2rem;
  text-align: center;
}
.title {
  font-size: 3.5rem;
  color: #007bff;
  margin-bottom: 1rem;
  animation: slideIn 1s ease-out;
}
.subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>