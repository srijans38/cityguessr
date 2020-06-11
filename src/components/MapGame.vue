<template>
  <div>
    <GmapMap
      :center="{'lat': lat, 'lng': long}"
      :zoom="4"
      map-type-id="terrain"
      :options="options"
      style="width:100vw; height:100vh;"
      @click="click"
    ></GmapMap>
    <div class="ui">
      <div class="head">
        <h1>CityGuessr</h1>
      </div>
      <p>Guess the location of {{ city }} by tapping or clicking in the map.</p>
    </div>
  </div>
</template>

<script>
import { styles } from "@/mapstyle";

export default {
  props: ["lat", "long", "city"],
  data() {
    return {
      styles: styles,
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
        backgroundColor: "transparent",
        gestureHandling: "none",
        keyboardShortcuts: false,
        styles: styles,
        draggableCursor: "default"
      }
    };
  },
  methods: {
    click(e) {
      console.log(e.latLng.lat(), e.latLng.lng());
    }
  }
};
</script>

<style scoped>
.ui {
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

p {
  margin-top: auto;
  margin-bottom: 2%;
}

h1 {
  align-self: flex-start;
  margin: 2rem 4rem;
}

.head {
  width: 100vw;
}

@media only screen and (max-width: 600px) {
  p {
    margin-bottom: 20%;
  }
}
</style>
