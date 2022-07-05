<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/urldata";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { data } = storeToRefs(main);
</script>

<!--  -->

<!--  -->

<template>
  <div>
    <table class="table-auto" v-if="data">
      <thead>
        <tr>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="item in data.stats"
            :key="item"
            class="border border-gray-300 text-center bg-gray-200 w-[40px]"
          >
            {{ item.result }}
          </td>
        </tr>
        <tr>
          <td v-for="item in data.stats" :key="item">{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
    <button>go</button>
  </div>
</template>
