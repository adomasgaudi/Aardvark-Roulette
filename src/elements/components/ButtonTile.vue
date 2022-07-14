<script lang="ts" setup>
import { onMounted, onUpdated, ref } from "vue";
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import { defineEmits } from "vue";

const main = useUrlData();
const { startDelta } = storeToRefs(main);
const button = ref();
const props = defineProps(["info"]);

//utilities
const shift = (number: number, shift: number) => (number + shift) % 37;
const revIndex = (index: number) => index - (-1 * 36 + 2 * index);
const forwIndex = (index: number) => index + 1;
const grid = (col: number, row: number) =>
  `grid-row: ${row} ; grid-column: ${col}; `;

onMounted(() => {
  const index = shift(props.info.index, 19);
  const style = button.value.style;

  //location on the circle
  if (index >= 0 && index <= 17)
    style.cssText += `${grid(forwIndex(index), 1)}`;
  if (index === 18) style.cssText += `${grid(18, 2)};`;
  if (index === 19) {
    style.cssText += `
    ${grid(17, 3)}; grid-column-end: 19;
    width: 90px`;
  }
  if (index >= 20 && index <= 36)
    style.cssText += `${grid(revIndex(index), 3)}`;
  if (index === 36) style.cssText += `${grid(1, 2)}`;

  // corner rounding
  if (index === 0) {
    style.cssText += `
      border-top-left-radius: 30px;`;
  }
  if (index === 17) {
    style.cssText += `
      border-top-right-radius: 30px;`;
  }
  if (index === 19) {
    style.cssText += `
    border-bottom-right-radius: 30px;`;
  }
  if (index === 35) {
    style.cssText += `
      border-bottom-left-radius: 30px ;`;
  }
});

onUpdated(() => {
  if (
    props.info.tileNum === props.info.history[0].result &&
    startDelta.value.timer < 10
  ) {
    button.value.classList.add("glow");
  } else {
    button.value.classList.remove("glow");
  }
});

//emit to parent component
const emit = defineEmits(["select"]);
onMounted(() => {
  emit("select", button.value);
});
</script>

<!--  -->

<template>
  <button
    ref="button"
    class="border-none text-center text-lg font-bold text-white"
  >
    <slot />
  </button>
</template>
