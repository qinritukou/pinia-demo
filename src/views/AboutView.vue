<template>
  <div class="about">
    <h1>about</h1>
    <button class="counter-button" @click="storeCounter.increment">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";
const storeCounter = useCounterStore();
</script>

<style scoped>
.counter-button {
  font-size: 50px;
}
</style>
