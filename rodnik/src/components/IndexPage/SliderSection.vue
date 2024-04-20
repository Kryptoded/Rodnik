<template>
  <section class="slider-section">
    <div class="text-h4 text-center" style="font-family: lighthaus">
      Наш СНТ
    </div>
    <q-carousel
      swipeable
      animated
      arrows
      infinite
      v-model="slide"
      v-model:fullscreen="fullscreen"
    >
      <q-carousel-slide :name="1" img-src="~assets/layer-1.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/layer-1.jpg" />
      <q-carousel-slide :name="3" img-src="~assets/layer-1.jpg" />
      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullscreen = ref<boolean>(false);
const slide = ref<number>(1);
</script>

<style>
.slider-section {
  max-width: 1200px;
  padding-top: 40px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  height: 100vh;
}
</style>
