import { Container } from "inversify";
import FeedLoader from "./lib/feed/infrastructure/FeedLoader";
import type FeedProvider from "./lib/feed/core/ports/outgoing/FeedProvider";
import { TYPES } from "./types";
import type GetFeed from "./lib/feed/core/ports/incoming/GetFeed";
import { FeedService } from "./lib/feed/core/FeedService";

const container = new Container();
container.bind<FeedProvider>(TYPES.FeedProvider).to(FeedLoader);
container.bind<GetFeed>(TYPES.GetFeed).to(FeedService);

export { container };