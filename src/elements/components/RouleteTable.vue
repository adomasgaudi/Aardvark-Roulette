<script lang="ts" setup>
import ButtonRoulete from "../components/ButtonRoulete.vue";
import { ref } from "vue";
import { defineEmits } from "vue";

defineProps(["arr"]);

const emit = defineEmits(["select"]);

const selected = ref(null);

const rouleteSelect = (item) => {
  emit("select", item);
  // console.log(item);
  selected.value = item;
};
</script>

<template>
  <div class="flex flex-row">
    <button-roulete color="green" @click="rouleteSelect('0')">
      {{ `0` }}
    </button-roulete>
    <div class="grid grid-cols-12 h-[140px]">
      <button-roulete
        :color="item == '0' ? 'green' : item % 2 ? 'black' : 'red'"
        v-for="item in arr.slice(1)"
        :key="item"
        @click="rouleteSelect(item)"
      >
        {{ item }}
      </button-roulete>
    </div>
  </div>
</template>
