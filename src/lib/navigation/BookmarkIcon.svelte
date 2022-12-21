<script lang="ts">
</script>

<template lang="pug">
  .container
    .flag
      .cut
</template>

<style lang="scss">
  .container {
    display: inline-block;
    opacity: 0.4;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    &:active {
      opacity: 0.6;
    }

    .flag {
      border-bottom: none;
      height: 1.43em;
      overflow: hidden;
      border-top-left-radius: 10%;
      border-top-right-radius: 10%;
      background-color: rgb(64, 48, 249);

      .cut {
        width: 1em;
        height: 1em;
        border-bottom: none;
        border-right: none;
        margin-top: 100%;
        border-top-left-radius: 10%;
        background-color: white;

        rotate: 45deg;
      }
    }
  }
</style>
