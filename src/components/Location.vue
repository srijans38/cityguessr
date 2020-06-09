<template>
    <div class="location">
        <h1>
            Enter your city
        </h1>
        <gmap-autocomplete placeholder="" @place_changed="setPlace"></gmap-autocomplete>
        <Button text="START!"/>
    </div>
</template>

<script>
import Button from './Button';

export default {
    name: 'Location',
    components: {
        Button
    },
    data() {
        return {
            city: null,
        }
    },
    methods: {
        setPlace(city) {
            this.city = city;
        }
    }
}

</script>

<style scoped>
  h1 {
    font-size: 6rem;
    font-weight: normal;
  }

  input {
      margin-top: 8rem;
      margin-bottom: 2rem;
      height: 10rem;
      width: max(50vw, 60rem);
      font-size: 4rem;
      font-family: 'VT323', monospace;
      text-align: center;
      color: white;
      background-color: transparent;
      border: 3px solid white;
  }

  .location {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
</style>