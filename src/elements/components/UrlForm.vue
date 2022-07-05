<script lang="ts" setup>
//fetch data from a url
const response = await fetch(
  "https://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration"
);
const data = await response.json();
await console.log(data);
</script>

<template>
  <form>
    <label for="">Current Roulete table Url</label>
    <input type="text" />
  </form>
</template>
