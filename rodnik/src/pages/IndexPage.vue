<template>
    <PageComponent>
      <app-header />
      <MainComponent />
      <SliderSection />
    </PageComponent>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import { ref } from 'vue';
import PageComponent  from "components/PageComponent.vue";
import MainComponent from "components/IndexPage/MainComponent.vue";
import AppHeader from "components/IndexPage/AppHeader.vue";
import SliderSection from "components/IndexPage/SliderSection.vue"
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});
</script>

<style scoped>

</style>
