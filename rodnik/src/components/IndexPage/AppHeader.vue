<template>
  <div class="header">
    <div class="header-button">
      <q-btn color="white" label="Главная" icon="home" flat/>
      <q-btn color="white" label="Зарегистрироваться" icon="person" flat/>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
  position: fixed;
  top:0;
  left: 0;
  color: white;
  right: 0;
  width: 100vw;
  z-index: 99;
}


.header-button {
    width: 1200px;
    height: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>
