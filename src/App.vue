<template>
  <div id="app">
    <transition 
      name="slide" 
      mode="out-in" 
      appear
      appear-active-class="fade-active"
      appear-class="fade-appear"
      appear-to-class="fade-to"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import Home from './components/Home.vue'

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-color : #0A0D17;
  --accent-color : #B8B3E9;
  font-size: 10px;
}

body {
  background-color: var(--bg-color);
  font-family: VT323, monospace;
  color: white;
  overflow: hidden;
}

@media only screen and (max-width: 1200px) {
  :root {
    font-size: 8px;
  }
}

@media only screen and (max-width: 800px) {
  :root {
    font-size: 5px;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.slide-enter {
  transform: translateX(100vw);
}

.slide-leave-to {
  transform: translateX(-100vw);
}

.fade-active {
  transition: opacity 2s ease;
}

.fade-appear {
  opacity: 0;
}

.fade-to {
  opacity: 1;
}
</style>
