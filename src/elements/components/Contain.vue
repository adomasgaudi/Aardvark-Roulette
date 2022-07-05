<script lang="ts" setup>
defineProps(["classout", "classin", "pad"]);

// const classout = "";
// const classin = "";
// const pad = "";

// console.log(classoutt, classout);
</script>

<template>
  <main class="flex justify-center min-h-[800px]" :class="classout">
    <div class="container xl:w-[1124px]">
      <div
        class="px-5 sm:px-[15%] md:px-[20%] lg:px-[22%] xl:px-[24%]"
        :class="pad"
      >
        <div class="flex" :class="classin">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
