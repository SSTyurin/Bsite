<!-- components/ServiceDescription.vue -->
<template>
  <div class="service-description" v-if="service">
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
  }
}
</script>

<style scoped>
.service-description {
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in;
}
h3 {
  color: #007bff;
  margin-bottom: 1rem;
}
p {
  color: #333;
  line-height: 1.6;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>