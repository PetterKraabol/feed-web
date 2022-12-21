import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";
import type GetFeed from "./ports/incoming/GetFeed";
import type FeedProvider from "./ports/outgoing/FeedProvider";
import type { Feed } from "./model/Feed";
import type GetFeedQuery from "./model/query/GetFeedQuery";

@injectable()
export class FeedService implements GetFeed {
  @inject(TYPES.FeedProvider) private feedProvider: FeedProvider;


  query(query: GetFeedQuery): Promise<void | Feed> {
    return this.feedProvider.getFeed();
  }

}