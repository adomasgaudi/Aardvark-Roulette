<template>
  <div class="partdiv">
    <slot />
  </div>
</template>

<style lang="sass">
.partdiv
  width: 100%
  @media (min-width: 768px)
    width: 50%
</style>
