<template>
  <PageComponent>
    <app-header />
    <MainComponent>
      <q-btn
        icon="expand_more"
        flat
        color="white"
        round
        size="lg"
        class="test"
        @click="scrollToSliderSection"
      />
    </MainComponent>
    <SliderSection ref="sliderSection" />
  </PageComponent>
</template>

<script setup lang="ts">
import PageComponent from 'components/PageComponent.vue';
import MainComponent from 'components/IndexPage/MainComponent.vue';
import AppHeader from 'components/IndexPage/AppHeader.vue';
import SliderSection from 'components/IndexPage/SliderSection.vue';
import { ref } from 'vue';

const sliderSection = ref<InstanceType<typeof SliderSection>>();

function scrollToSliderSection() {
  const offsetTop = sliderSection.value?.$el.offsetTop;
  window.scrollTo({
    top: offsetTop - 40,
    behavior: 'smooth',
  });
}
</script>

<style scoped>
.test {
  position: absolute;
  z-index: 99;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #ccc;
}
</style>
