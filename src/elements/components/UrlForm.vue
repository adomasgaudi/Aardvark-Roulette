<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/urldata";
const main = useUrlData();

const getdata = async () => {
  const api = `https://dev-games-backend.advbet.com/v1/ab-roulette/`;
  const resNext = await fetch(`${api}1/nextGame`);
  const resHistory = await fetch(`${api}1/history`);
  const resSchedule = await fetch(`${api}1/scheduledGames`);
  const resStats = await fetch(`${api}1/stats`);
  const resConfig = await fetch(`${api}1/configuration`);
  const resVersion = await fetch(`${api}version`);

  const next = await resNext.json();
  const history = await resHistory.json();
  const schedule = await resSchedule.json();
  const stats = await resStats.json();
  const config = await resConfig.json();
  const version = await resVersion.json();

  console.log({ next, history, schedule, stats, config, version });

  await main.addData({ next, history, schedule, stats, config, version });
};

const getdataagain = () => {
  getdata();
  setTimeout(() => {
    getdata();
    getdataagain();
  }, 500);
};

getdataagain();
</script>

<template>
  <form>
    <label for="">Current Roulete table Url</label>
    <input type="text" />
  </form>
</template>
