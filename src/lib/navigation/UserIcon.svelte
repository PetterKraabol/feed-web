<script lang="ts">
</script>

<template lang="pug">
  .icon
    .circle
      .head
      .shoulder
</template>

<style lang="scss">
  $color: #979797;

  .icon {
    display: inline-block;
    opacity: 0.8;
    border-radius: 100%;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }

    &:active {
      opacity: 1;
    }

    .circle {
      border: 1px solid $color;
      width: 2em;
      height: 2em;
      border-radius: 100%;

      .head {
        margin-right: auto;
        margin-left: auto;
        margin-top: 0.3em;
        width: 0.7em;
        height: 0.7em;
        border: 1px solid $color;
        border-radius: 100%;
      }

      .shoulder {
        margin-right: auto;
        margin-left: auto;
        margin-top: 0.1em;
        width: 1.3em;
        height: 0.9em;
        border-top: 1px solid $color;
        border-radius: 100%;
      }
    }
  }
</style>
