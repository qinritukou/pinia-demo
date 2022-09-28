<template>
  <div class="count">
    {{ storeCounter.count }}
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
