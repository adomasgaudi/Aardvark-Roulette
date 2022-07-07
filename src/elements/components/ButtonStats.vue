<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { useCSS } from "../../utils/tools/useCSS";
const button = ref();

const { css } = useCSS();
const props = defineProps(["color"]);

onMounted(() => {
  // console.log(props);

  button.value.style.cssText = ` background-color: hsl(0, 100%, ${
    100 - props.color * 10
  }%)`;
});
</script>

<template>
  <button ref="button" id="button-stats" class="st">
    <slot />
  </button>
</template>

<!--  -->
