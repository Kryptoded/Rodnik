<template>
  <div class="column justify-between menu-icon" :class="{'active': props.active}">
    <div class="menu-icon-item" />
    <div class="menu-icon-item" />
    <div class="menu-icon-item" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  active: boolean
}
const props = defineProps<Props>()
</script>

<style scoped>
.menu-icon {
  width: 40px;
  height: 30px;
  cursor: pointer;
}
.menu-icon-item {
  transition: all .15s ease;
  border-top: 2px solid white;
}

.menu-icon.active .menu-icon-item:nth-child(2) {
  transform: translateX(-200%);
  opacity: 0;
  visibility: hidden;
}

.menu-icon.active .menu-icon-item:nth-child(1) {
  transform-origin: 100%;
  transform: rotate(-45deg)
}

.menu-icon.active .menu-icon-item:nth-child(3) {
  transform-origin: 100%;
  transform: rotate(45deg)
}


</style>
