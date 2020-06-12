<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      :options="options"
      style="width:100vw; height:100vh;"
      @click="clickMap"
    >
      <GmapMarker 
        v-for="(m, index) in markersFiltered"
        :key="index" 
        :position="m.position"
        :title="m.title"
        :clickable="true"
        :draggable="m.title ? false : true"
      />
      <GmapPolyline 
        v-if="confirmed"
        :path="path"
        :editable="false"
        :options="{deepWatch: true}" 
      />
    </GmapMap>
    <div class="ui">
      <div class="head">
        <h1>CityGuessr</h1>
        <h1 @click="gameReset">X</h1>
      </div>
      <transition name="slide-down" mode="out-in">
        <p class="info" v-if="markers.length < 2">Guess the location of {{ city }} by tapping or clicking in the map.</p>
        <p class="info" v-if="confirmed">Your Guess: {{ distance }}</p>
        <div v-else class="btns">
          <p>Are you Sure?</p>
          <div>  
            <Button text="Confirm" @click.native="confirm"/>
            <Button text="Reset" @click.native="markers.pop()" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { styles } from "@/mapstyle";
import Button from "./Button";

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
      },
      markers: [
        {
          title: this.city,
          show: false,
          position : {
            lat: this.lat,
            lng: this.long,
          }
        },
      ],
      confirmed: false,
      zoom: 4,
      center: {
        
      }
    };
  },
  created() {
    this.center = {
      lat: this.clat,
      lng: this.clong
    }
  },
  methods: {
    clickMap(e) {
      console.log(e.latLng.lat(), e.latLng.lng());
      if(this.markers.length < 2){
        this.markers.push({
          position : {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          }
        });
      }
    },
    gameReset() {
      return this.$emit('gameReset');
    },
    haversine_distance(mk1, mk2) {
      var R = 6371.0710; // Radius of the Earth in kms
      var rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
      var rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
      var difflat = rlat2-rlat1; // Radian difference (latitudes)
      var difflon = (mk2.lng-mk1.lng) * (Math.PI/180); // Radian difference (longitudes)

      var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
      return d;
    },
    confirm() {
      this.confirmed=true; 
      this.markers[0].show=true; 
      this.markers[1].title='Your Guess'; 
      this.zoom=8;
      this.center.lat = this.lat;
      this.center.lng = this.long;
    }
  },
  computed: {
    clat() {
      return this.lat + (Math.random() * 2 - 1) * 5;
    },
    clong() {
      return this.long + (Math.random() * 2 - 1) * 5;
    },
    markersFiltered() {
      return this.markers.filter(i => i.show !== false);
    },
    path() {
      let path = [];
      this.markers.map(({position}) => {
        path.push(position);
      });
      return path;
    },
    distance() {
      return this.haversine_distance(this.path[0], this.path[1]).toFixed(2);
    }
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.ui {
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

p,.btns {
  margin-top: auto;
  margin-bottom: 2%;
}

.btns {
  pointer-events: all;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
  }
  
  button {
    text-align: center;
    font-size: 5rem;
    flex-direction: row;
    &:first-child{
      margin-right: 2%;
    }
  }
}

.head {
  width: 100vw;
  display: flex;

  h1 {
    align-self: flex-start;
    margin: 2rem 4rem;

    &:last-child {
      margin-left: auto;
      pointer-events: all;
      cursor: pointer;
    }
  }

}

.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

.slide-down-enter {
  transform: translateY(25vh);
}

.slide-down-leave-to {
  transform: translateY(25vh);
}

@media only screen and (max-width: 600px) {
  .info,.btns {
    margin-bottom: 20%;
  }

  .btns button {
    font-size: 4rem;
  }
}
</style>
