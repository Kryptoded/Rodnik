<template>
  <div class="header">
      <q-tabs
        inline-label
        class="text-white shadow-2"
      >
      <div class="tabs-wrapper" ref="test" style="width: 100%;">
        <menu-icon
          @click="switchActive"
          :active="menuActive"
          class="menu-icon"
        />
        <q-tab
          name="home"
          icon="home"
          label="Главная"
          class="q-mt-md"
        />
        <q-tab
          name="charter"
          icon="book"
          label="Устав"
        />
        <q-tab
          name="meet"
          icon="group"
          label="Собрание"
        />
        <q-tab
          name="policy"
          icon="policy"
          label="Исполнительные органы"
        />
        <q-tab
          name="documents"
          icon="description"
          label="Документы"
        />
        <q-tab
          name="reactions"
          icon="add_reaction"
          label="Мнения"
        />
      </div>
      </q-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from "vue";
  import MenuIcon from "./MenuIcon.vue";

  const test = ref(null);
  const menuActive = ref(false);

  function switchActive():void {
    menuActive.value = !menuActive.value;
  }
  watch(menuActive, (value, oldValue)=>{
    if (value && test.value != null) {
      console.log(test.value)
      test.value.style.maxHeight = test.value.scrollHeight + 'px';
    } else {
      test.value.style.maxHeight = '50px';
    }
  })
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
  flex-direction: row;
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  transition: max-height .35s ease;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .menu-icon {
    display: flex;
    align-self: flex-end;
    min-height: 30px;
  }
  .tabs-wrapper {
    flex-direction: column !important;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    padding: 10px;
    flex-wrap: nowrap;
    max-height: 50px;
  }
}

</style>
