<script lang="ts" setup>
import { onMounted, ref } from "vue";

const button = ref();

const props = defineProps(["color", "info"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";

onMounted(() => {
  const shift = (number: number, shift: number) => (number + shift) % 37;
  const index = shift(props.info.index, 19);
  const style = button.value.style;
  const revIndex = (index: number) => index - (-1 * 36 + 2 * index);
  const forwIndex = (index: number) => index + 1;
  const grid = (col: number, row: number) =>
    `grid-row: ${row} ; grid-column: ${col}; `;
  const rn = "0%"; //roundedness

  // cases
  style.cssText += ` @extend shadow_tile`;

  if (index >= 0 && index <= 17) style.cssText = `${grid(forwIndex(index), 1)}`;
  if (index == 0) {
    style.cssText += `
      border-radius: 30px ${rn} ${rn} ${rn} / 30px ${rn}  ${rn}  ${rn};`;
  }
  if (index == 17) {
    style.cssText += `
      border-radius: ${rn} 30px ${rn}  ${rn} / ${rn} 30px ${rn}  ${rn};`;
  }
  if (index == 18) style.cssText = `${grid(18, 2)};`;
  if (index == 19) {
    style.cssText += `
    ${grid(17, 3)}; grid-column-end: 19;
    border-radius: ${rn} ${rn} 30px ${rn} / ${rn} ${rn} 30px ${rn};
    width: 90px`;
  }
  if (index >= 20 && index <= 36) style.cssText = `${grid(revIndex(index), 3)}`;
  if (index == 35) {
    style.cssText += `
        border-radius:  ${rn} ${rn} ${rn} 30px / ${rn}  ${rn}  ${rn} 30px ;`;
  }
  if (index == 36) {
    style.cssText += `
    ${grid(1, 2)}`;
  }

  //
});
</script>

<template>
  <button
    ref="button"
    class="w-[45px] border-none text-center text-lg font-bold text-white col-start-2"
    :class="color === 'red' ? redcss : color === 'green' ? greencss : blackcss"
    v-if="props.info"
    :id="props.info.index"
  >
    <!-- {{ props.data.index }} -->
    <slot />
  </button>
</template>
<!--  -->
