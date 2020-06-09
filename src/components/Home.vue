<template>
  <div class="intro">
   <h1>Hello!</h1>
   <h2>This is a simple game</h2>
   <p>All you have to do is enter the name of a city of your choice (maybe your home) and appropriately guess its location by placing a pointer on a map with no markings.
<br> The closer you get the more points you earn.</p>
    <h3>Ready for the challenge?</h3>
    <Button text="GO!"/>
  </div>
</template>

<script>
import Button from "./Button"

export default {
  name: 'Home',
  components : {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1,h2 {
    font-size: 8rem;
    font-weight: normal;
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    margin-top: 4rem;
    font-size: 3.5rem;
    text-align: center;
    max-width: min(70vw, 1000px);
    font-weight: normal;
  }

  h3 {
    font-size: 5rem;
    font-weight: normal;
    margin-top: 8rem;
  }

  .intro {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
