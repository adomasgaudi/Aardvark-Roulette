<script lang="ts" setup>
import ButtonTile from "./ButtonTile.vue";
import { onMounted, ref } from "vue";

const props = defineProps(["info"]);

interface statsT {
  result: number;
  count: number;
}

const buttonIn = ref();
onMounted(() => {
  const style = buttonIn.value.style;
  const coldArr = props.info.stats.slice(0, 5);
  const hotArr = props.info.stats.slice(-5);

  if (coldArr.find((obj: statsT) => obj.result === props.info.tileNum)) {
    style.backgroundColor = "#4fb0e8";
  } else if (hotArr.find((obj: statsT) => obj.result === props.info.tileNum)) {
    style.backgroundColor = "#ec6776";
  }
});

const eref = (e: HTMLElement) => {
  buttonIn.value = e;
};
</script>

<template>
  <button-tile
    @select="eref"
    ref="buttonTile"
    class="w-[45px]"
    v-if="info"
    :info="info"
  >
    <slot />
  </button-tile>
</template>
