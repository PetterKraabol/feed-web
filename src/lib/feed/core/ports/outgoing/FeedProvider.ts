import type { Feed } from "../../model/Feed";

export default interface FeedProvider {

  getFeed(): Promise<void | Feed>;

}