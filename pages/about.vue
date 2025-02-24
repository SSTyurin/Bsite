<!-- pages/about.vue -->
<template>
  <div class="container">
    <h1 class="title">О компании</h1>
    <p class="subtitle">BioTech Innovations — лидер в области биотехнологий</p>
    <div class="content">
      <h2>Цели организации</h2>
      <p>
        Наша миссия — улучшать качество жизни людей через инновации в медицине. Мы стремимся:
      </p>
      <ul>
        <li>Разрабатывать безопасные и эффективные лекарства для борьбы с неизлечимыми заболеваниями.</li>
        <li>Продвигать генную терапию как доступный метод лечения на глобальном уровне.</li>
        <li>Создавать экологически чистые биотехнологические решения для устойчивого будущего.</li>
      </ul>
      <p>
        Мы верим, что наука и технологии способны изменить мир, и каждый день работаем над тем, чтобы это стало реальностью.
      </p>
    </div>
  </div>
</template>

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
.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in;
}
h2 {
  color: #007bff;
  margin-bottom: 1rem;
}
p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
}
ul {
  list-style: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
}
li {
  color: #333;
  line-height: 1.6;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>