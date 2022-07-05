<script lang="ts" setup>
defineProps(["classout", "classin", "pad"]);
</script>

<template>
  <main class="flex justify-center min-h-[800px]" :class="classout">
    <div class="container xl:w-[1124px]">
      <div
        class="px-5 sm:px-[5%] md:px-[5%] lg:px-[10%] xl:px-[10%]"
        :class="pad"
      >
        <div class="flex w-full" :class="classin">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
