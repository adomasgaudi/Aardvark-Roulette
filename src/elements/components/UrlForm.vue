<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/urldata";
//fetch data from a url
const main = useUrlData();
main.addOne();
main.addOne();
console.log(main.counter);

const response = await fetch(
  "https://dev-games-backend.advbet.com/v1/ab-roulette/1/stats"
);
const resHistory = await fetch(
  "https://dev-games-backend.advbet.com/v1/ab-roulette/1/history"
);
const history = await resHistory.json();
const data = await response.json();
await main.addData(data);
await main.addHistory(history);
</script>

<template>
  <form>
    <label for="">Current Roulete table Url</label>
    <input type="text" />
  </form>
</template>
