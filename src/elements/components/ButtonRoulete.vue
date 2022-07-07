<script lang="ts" setup>
import { onMounted, ref } from "vue";

const button = ref();

const props = defineProps(["color", "data"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";

onMounted(() => {
  // position the tiles
  const index = props.data.index;
  const style = button.value.style;
  const revIndex = (index: number) => index - (-1 * 38 + 2 * index);
  const forwIndex = (index: number) => index + 1;
  const grid = (row: number, col: number) =>
    `grid-row-start: ${row}; grid-column-start: ${col};`;

  if (index == 0) style.cssText = `${grid(2, 1)} grid-row-end: 4;`;
  if (index >= 1 && index <= 17) style.cssText = `${grid(1, forwIndex(index))}`;
  if (index == 18) style.cssText = `${grid(2, 19)}`;
  if (index == 19) style.cssText = `${grid(3, 19)}`;
  if (index >= 20 && index <= 36) style.cssText = `${grid(4, revIndex(index))}`;

  //
});
</script>

<template>
  <button
    ref="button"
    class="w-[55px] text-center shadowHov_thick text-lg px-4 py-1 font-bold text-white border-none rounded-md mx-[0.5px] my-[2px] col-start-2"
    :class="color === 'red' ? redcss : color === 'green' ? greencss : blackcss"
    v-if="props.data"
    :id="props.data.index"
  >
    <!---->
    <!-- {{ props.data.index }} -->
    <slot />
  </button>
</template>
<!--  -->
