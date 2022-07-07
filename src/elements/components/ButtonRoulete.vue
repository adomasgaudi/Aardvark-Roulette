<script lang="ts" setup>
import { onMounted, ref } from "vue";

const button = ref();

const props = defineProps(["color", "data"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";

onMounted(() => {
  if (props.data.index == 0) {
    button.value.style.cssText = ` grid-column-start: 1; grid-row-start: 2; grid-row-end: 4`;
  }
  if (props.data.index >= 1 && props.data.index <= 17) {
    button.value.style.cssText = ` grid-row-start: 1; grid-column-start: ${
      props.data.index + 1
    }`;
  }
  if (props.data.index == 18) {
    button.value.style.cssText = ` grid-column-start: 19; grid-row-start: 2; `;
  }
  if (props.data.index == 19) {
    button.value.style.cssText = ` grid-column-start: 19; grid-row-start: 3; `;
  }
  if (props.data.index >= 20 && props.data.index <= 36) {
    button.value.style.cssText = ` grid-row-start: 4; grid-column-start: ${
      props.data.index - (-1 * 38 + 2 * props.data.index)
    }`;
  }
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
