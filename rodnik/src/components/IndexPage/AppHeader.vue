<template>
  <div class="header">
      <q-tabs inline-label class="text-white shadow-2" content-class="tabs-wrapper" style="backdrop-filter: blur(10px);">
        <menu-icon style="align-self: flex-end;" @click="switchActive" :active="menuActive" />
          <q-tab name="home" icon="home" label="Главная" />
          <q-tab name="charter" icon="book" label="Устав" />
          <q-tab name="meet" icon="group" label="Собрание" />
          <q-tab name="policy" icon="policy" label="Исполнительные органы" />
          <q-tab name="documents" icon="description" label="Документы" />
          <q-tab name="reactions" icon="add_reaction" label="Мнения" />
      </q-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import MenuIcon from "./MenuIcon.vue";
  const menuActive = ref(false);
  function switchActive():void {
    menuActive.value = !menuActive.value;
  }
</script>

<style>
.header {
  position: fixed;
  top:0;
  left: 0;
  color: white;
  right: 0;
  width: 100vw;
  z-index: 99;
}

.tabs-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap !important;
}

@media screen and (max-width: 600px) {
  .header {
    max-height: 50px;
    overflow: hidden;
  }
  .tabs-wrapper {
    flex-direction: column !important;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    flex-wrap: wrap;
    padding: 10px;
  }
}

</style>
