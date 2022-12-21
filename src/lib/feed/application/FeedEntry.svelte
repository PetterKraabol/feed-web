<script lang="ts">
  import moment from "moment";
  import type { Article } from "../core/model/Article";

  export let article: Article;

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

  function removeHtmlTags(value: string) {

  }
</script>

<template lang="pug">
.article
  .thumbnail
    +if ('article.image')
      a(href='{article.link}', target='_blank', rel='noreferrer')
        img(src='{article.image}', alt='thumbnail')
  .info
    a(href='{article.link}', target='_blank', rel='noreferrer')
      h2.title {article.title}
    .website
      +if ('article.webpageMetadata?.website')
        | {article.webpageMetadata?.website}
      +if ('article.webpageMetadata?.website && article.timestamp')
        | &nbsp;&bullet;&nbsp;
      | {formatTimestamp(article.timestamp)}
    +if ('article.audio.length > 0')
      audio(controls)
        +each ('article.audio as audio')
          source(src='{audio.src}', type='{audio.type}')
    +if ('article.description')
      p.description {article.description.replace(/<[^>]*>?/gm, '')}
</template>

<style lang="scss">
  .article {
    color: rgb(93, 93, 93);
    //border: 1px solid rgb(244, 244, 244);
    border-radius: 0.5em;
    display: inline-block;
    margin-top: 2em;
    width: inherit;
    transition: 200ms;
  }

  .thumbnail {
    padding: 1.3em;
    display: block;
    float: left;
    width: 175px;
    height: 175px;

    img {
      object-fit: cover;
      object-position: center;
      border-radius: 0.5em;
      width: 100%;
      height: 100%;
      box-shadow: 3px 5px 15px #9e9e9e;

      &:hover {
        box-shadow: 3px 5px 17px #9e9e9e;
      }
    }
  }

  .info {
    text-align: left;
    margin: 0;
    padding: 1em;

    .title {
      font-size: 1.3em;
      margin-top: 2px;
      margin-bottom: 2px;

      &:hover {
        text-decoration: underline;
      }
    }

    .website {
      font-size: 0.9em;
      color: rgb(117, 117, 117);
      font-style: italic;
    }

    .description {
      font-size: 0.9em;
    }
  }
</style>
