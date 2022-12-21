import type { Article } from "./Article";

export class Feed {
  articles: Article[];

  constructor(articles: Article[]) {
    this.articles = articles;
  }

  public static empty(): Feed {
    return new Feed([]);
  }

}