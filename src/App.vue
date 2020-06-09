<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
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
</style>
