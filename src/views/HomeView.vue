<template>
  <div class="home">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="button">
      <button id="decrement" @click="storeCounter.decrement">-</button>
      <button id="increment" @click="storeCounter.increment">+</button>
    </div>
    <hr />
    <div>This counter is: {{ storeCounter.oddOrEven }}</div>
    <hr />
    <div>
      <h3>Edit counter:</h3>
      <input type="number" v-model="storeCounter.count" />
    </div>
    <hr />
    <Counter />
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";
import Counter from "../components/Counter.vue";

const storeCounter = useCounterStore();
</script>

<style scoped>
.count {
  font-size: 20px;
  margin: 20px;
}
.button button {
  font-size: 40px;
  margin: 10px;
}
</style>
