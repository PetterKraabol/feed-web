<script lang="ts">
  import { onMount } from "svelte";
  import moment from "moment";
  import { container } from "../../../inversify.config";
  import type GetFeed from "../core/ports/incoming/GetFeed";
  import { TYPES } from "../../../types";
  import GetFeedQuery from "../core/model/query/GetFeedQuery";
  import type { Feed } from "../core/model/Feed";
  import FeedEntry from "./FeedEntry.svelte";
  import type { Article } from "../core/model/Article";
  import { feed } from "../core/FeedStore";
  import { getFeed } from "../core/ports/incoming/GetFeed";

  onMount(async () => {
    getFeed.query(new GetFeedQuery()).then((data) => feed.set(data as Feed));
  });

  function formatTimestamp(timestamp: Date) {
    var date = moment(timestamp);

    if (date.isSameOrAfter(moment().subtract(1, "day"))) {
      return date.fromNow();
    }

    if (date.isAfter(moment().subtract(6, "days"))) {
      return moment(date).calendar();
    }

    return moment(date).format("MMMM Do YYYY");
  }
</script>

<template lang="pug">
.feed
  +each ('$feed.articles as article')
    FeedEntry(article='{article}')
</template>

<style lang="scss">
  .feed {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 50em;
  }
</style>
