<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Knewave&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Potta+One&family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Radio+Canada:wght@300;400;500;600;700&family=Rubik+Glitch&family=VT323&display=swap')

$color-text: #3d3d3c
$color-light: mix(#3d3d3c, #fff, 50%)


body
  background: #f2f3f2
  font-family: 'Inter', sans-serif
  color: $color-text

.lighter
  color: $color-light

  // font-family: 'Knewave', cursive
  // font-family: 'Nunito Sans', sans-serif
  // font-family: 'Potta One', cursive
  // font-family: 'Prompt', sans-serif
  // font-family: 'Radio Canada', sans-serif
  // font-family: 'Rubik Glitch', cursive
  // font-family: 'Miller Text', serif



*
  box-sizing: border-box

html,
body
  height: 100%
  width: 100%
  padding: 0
  margin: 0

html
  scroll-behavior: smooth

body
  overflow-y: auto
  overflow-x: hidden

a
  color: inherit
  text-decoration: none

// scrollbar
::-webkit-scrollbar
  width: 14px
  border-left: 1px solid #ccc
::-webkit-scrollbar-thumb
  border-radius: 3px
  background: #f5f5f5
  border: 1px solid #e9e9e9
::-webkit-scrollbar-thumb:hover
  border: 1px solid #9cbaeb
  background: #bdbdbd

// on text selection
*
  &::selection
    // background: #de4e53
    // background: #789ec1
    // background: #619ee7
    // background: #3ec3af
    // background: #8ace8a
    // background: #2d566f
    background: #de385f9f
    // color: #e7deeb
    // color: #c1eaec
    // color: #36555f
    // color: #de365e
    color: #2d566f
    // color: #2d566f
    // color: #d76e4f

.trans
  transform: 1s




/*=== Trigger  ===*/
.animate100
  animation-duration: 1s
  animation-fill-mode: both

.animate15
  animation-duration: .2s
  animation-fill-mode: both

/*=== Optional Delays, change values here  ===*/
.one
  animation-delay: 0s

/*==== FADE IN UP ===*/

@keyframes fadeInUp
  from
    opacity: 0
    transform: translateY(50px)

  to
    opacity: 1
    transform: none

.fadeInUp
  @extend .animate100 !optional
  animation-name: fadeInUp

.fadeInUp15
  @extend .animate15 !optional
  animation-name: fadeInUp

@keyframes fadeInUp10
  from
    opacity: 0
    transform: translateY(10px)

  to
    opacity: 1
    transform: none

.fadeInUp10
  @extend .animate100 !optional
  animation-name: fadeInUp10

.fadeInUp15s
  @extend .animate15 !optional
  animation-name: fadeInUp


// shadows

.shadow_1
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px

.shadow_thick
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset

.shadow_inset
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset

.shadow_trello_1
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px

.shadow_trello_2
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px

.shadow_ionic
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1)

.glow_blue
  box-shadow: 0 20px 20px -17px rgba(0,111,255,0.53)

.glow_side
  transition: .15s
  &:hover
    box-shadow: 5px 0px 5px -5px #f47460

.shadowHov_trello
  @extend .shadow_trello_1 !optional
  &:hover
    @extend .shadow_trello_2 !optional

.shadowHov_thick
  @extend .shadow_thick !optional
  &:active
    @extend .shadow_inset !optional

.shadow_tile
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset

.shadow_tileTop
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 5px -1px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset
  clip-path: inset(-5px 0px -5px 0px)


//fonts

body .pixel
  font-family: 'VT323', monospace
</style>
