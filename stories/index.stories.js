import Counter from "../src/index.svelte";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => Counter;

// https://storybook.js.org/docs/guides/guide-svelte/
export const story2 = () => ({
  Component: Counter,
  props: {
    count: 5,
  },
});
