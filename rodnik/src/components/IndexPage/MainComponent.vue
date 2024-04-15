<template>
  <section class="layers">
		<div class="layers__container">
			<div class="layers__item layer-1" :style="`background-image: url(${layer1});`"></div>
			<div class="layers__item layer-2" :style="`background-image: url(${layer2});`"></div>
			<div class="layers__item layer-3">
				<div class="hero-content">
					<h1>
            СНТ
            <span>
              Родник
            </span>
          </h1>
				</div>
			</div>
			<div class="layers__item layer-4">
				<canvas class="rain" ref="rain"></canvas>
			</div>
			<div class="layers__item layer-5" :style="`background-image: url(${layer5});`"></div>
			<div class="layers__item layer-6" :style="`background-image: url(${layer6});`"></div>
		</div>
	</section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import layer1 from "assets/layer-1.jpg"
import layer2 from "assets/layer-2.jpg";
import layer5 from "assets/layer-5.jpg";
import layer6 from "assets/layer-6.jpg";

function parallaxing(e) {
  Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
}

const rain = ref(null)

function getRain() {
  let canvas = rain.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let c = canvas.getContext('2d');

  function randomNum(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  function RainDrops(x, y, endy, velocity, opacity) {

    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function() {
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.x, this.y - this.endy);
      c.lineWidth = 1;
      c.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
      c.stroke();
    }

    this.update = function() {
      let rainEnd = window.innerHeight + 100;
      if (this.y >= rainEnd) {
        this.y = this.endy - 100;
      } else {
        this.y = this.y + this.velocity;
      }
      this.draw();
    }

  }

  let rainArray = [];

  for (let i = 0; i < 140; i++) {
    let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
    let rainYLocation = Math.random() * -500;
    let randomRainHeight = randomNum(10, 2);
    let randomSpeed = randomNum(20, .2);
    let randomOpacity = Math.random() * .55;
    rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
  }

function animateRain() {

	requestAnimationFrame(animateRain);
	c.clearRect(0,0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < rainArray.length; i++) {
		rainArray[i].update();
	}

}

animateRain();

}

onMounted(()=>{
  document.addEventListener('mousemove', parallaxing)
  getRain()
})

onUnmounted(()=>{
  document.removeEventListener('mousemove', parallaxing)
})

</script>
<style scoped>
  .layers {
    perspective: 1000px;
    overflow: hidden;
  }
  .layers__container {
    height: 100vh;
    min-height: 500px;
    transform-style: preserve-3d;
    transform: rotateX(var(--move-y)) rotateY(var(--move-x));
    will-change: transform;
    transition: transform var(--transition);
  }
  .layers__item {
    position: absolute;
    inset: -5vw;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layer-1 {
    transform: translateZ(-55px) scale(1.06);
  }
  .layer-2 {
    transform: translateZ(80px) scale(.88);
  }
  .layer-3 {
    transform: translateZ(180px) scale(.8);
  }
  .layer-4 {
    transform: translateZ(190px) scale(.9);
  }
  .layer-5 {
    transform: translateZ(300px) scale(.9);
  }
  .layer-6 {
    transform: translateZ(380px);
  }
  .hero-content {
    font-size: calc(var(--index) * 2.9);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: calc(var(--index) * -.15);
    line-height: 1.35em;
    margin-top: calc(var(--index) * 5.5);
    color: white;
    font-weight: 800;
  }
  .hero-content span {
    display: block;
  }
  .hero-content__p {
    text-transform: none;
    font-family: merriweather-italic-3d;
    letter-spacing: normal;
    font-size: calc(var(--index) * .73);
    line-height: 3;
  }
  .button-start {
    font-family: Arial;
    font-weight: 600;
    text-transform: uppercase;
    font-size: calc(var(--index) * .71);
    letter-spacing: -.02vw;
    padding: calc(var(--index) * .7) calc(var(--index) * 1.25);
    background-color: transparent;
    color: #fff;
    border-radius: 10em;
    border: rgb(255 255 255 / .4) 3px solid;
    outline: none;
    cursor: pointer;
    margin-top: calc(var(--index) * 2.5);
  }
  .layer-4, .layer-5, .layer-6 {
    pointer-events: none;
  }
</style>
