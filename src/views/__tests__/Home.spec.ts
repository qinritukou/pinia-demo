import { describe, vitest, expect, test } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import Counter from "../HomeView.vue";
import { useCounterStore } from "../../stores/counter";
import { setActivePinia, createPinia } from "pinia";

describe("HomeView", () => {
  test("check init", () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
          }),
        ],
      },
    });
    expect(wrapper.find(".count").text()).toBe("0");
  });

  test("countは１の場合、表示が１になっている", () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              counter: {
                count: 1,
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.find(".count").text()).toBe("1");
  });
});
