import { injectable } from "inversify";
import type { Feed } from "../core/model/Feed";
import type FeedProvider from "../core/ports/outgoing/FeedProvider";
import '@abraham/reflection';

@injectable()
export default class FeedLoader implements FeedProvider {

  async getFeed(): Promise<void | Feed> {
    return await fetch(`http://localhost:8080/api/feed`)
      .then((response) => response.json() as unknown as Feed)
      .catch(exception => {
        console.error('Could not load feed', exception);
      });
  }

}