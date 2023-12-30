<template>
  <div class="container-fluid bg-info">

    <section class="row justify-content-center bg-info py-3">
      <div class="col-12 d-flex justify-content-center">
        <h2 class="pb-3 text-center text-dark ">Puppy Palace</h2>
      </div>
      <img @click="power++" class="img-fluid home"
        src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/dog_1f415.gif" alt="dog emoji">
      <button class="btn btn-dark">points +{{ power }}</button>
    </section>
    <section class="p-3 row justify-content-around text-center">
      <div class="col-4">
        <button @click="power += 2" class="btn btn-dark">{{ power }}</button>
      </div>
      <div class="col-4">
        <button class="btn btn-dark">upgrade</button>
      </div>
      <div class="col-4">
        <button class="btn btn-dark">upgrade</button>
      </div>
    </section>
    <section class="p-3 row justify-content-around text-center">
      <div class="col-4">
        <button class="btn btn-dark">upgrade</button>
      </div>
      <div class="col-4">
        <button class="btn btn-dark">upgrade</button>
      </div>
      <div class="col-4">
        <button class="btn btn-dark">upgrade</button>
      </div>
    </section>
  </div>
</template>

<script>

import { ref } from 'vue';
import { AppState } from '../AppState';

export default {
  setup() {
    const power = ref(0)
    const price = ref(0)
    const upgrade1 = ref(20)
    return {
      power,
      price,
      upgrade1
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 60vh;
  width: auto;
  place-content: center;
  text-align: center;
}
</style>
