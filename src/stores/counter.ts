import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value++;
  }

  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    return "odd";
  });

  return {
    count,
    oddOrEven,
    increment,
    decrement,
  };
});
