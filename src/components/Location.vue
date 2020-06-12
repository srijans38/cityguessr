<template>
  <div class="location">
    <transition name="fade">
      <div v-if="!game">
        <h1>Enter your city</h1>
        <gmap-autocomplete placeholder @place_changed="setPlace" :options="options" ></gmap-autocomplete>
        <Button @click.native="startGame" text="START!" />
      </div>
      <div v-else>
        <map-game 
            :lat="lat" 
            :long="long" 
            :city="city.address_components[0].long_name" 
            @gameReset="city = null; game = false;" 
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "./Button";
import MapGame from "./MapGame";

export default {
  name: "Location",
  components: {
    Button,
    MapGame
  },
  data() {
    return {
      city: null,
      game: false,
      options: {
          types: ['(cities)']
      }
    };
  },
  methods: {
    setPlace(city) {
      this.city = city;
    },
    startGame() {
      if (this.city) {
        this.game = true;
      }
    }
  },
  computed: {
    lat() {
      return this.city.geometry.location.lat();
    },
    long() {
      return this.city.geometry.location.lng();
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 6rem;
  font-weight: normal;
}

input {
  outline: none;
  margin-top: 8rem;
  margin-bottom: 2rem;
  height: 10rem;
  width: max(50vw, 60rem);
  font-size: 4rem;
  font-family: "VT323", monospace;
  text-align: center;
  color: white;
  background-color: transparent;
  border: 3px solid white;
}

div > div {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 1;
}
</style>