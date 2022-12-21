<script lang="ts">
  import BookmarkIcon from "./BookmarkIcon.svelte";
  import UserIcon from "./UserIcon.svelte";
  import ReadIcon from "./ReadIcon.svelte";
</script>

<template lang="pug">
  ul
    li
      BookmarkIcon
    li
      ReadIcon
    li hello
    li
      UserIcon
</template>

<style lang="scss">
  ul {
    text-align: right;

    li {
      width: 40px;
      display: inline;
      padding: 10px 20px;
    }
  }
</style>
