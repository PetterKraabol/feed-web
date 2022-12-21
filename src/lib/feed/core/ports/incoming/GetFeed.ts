import type GetFeedQuery from "../../model/query/GetFeedQuery";
import type { Feed } from "../../model/Feed";
import { container } from "../../../../../inversify.config";
import { TYPES } from "../../../../../types";

export default interface GetFeed {

  query(query: GetFeedQuery): Promise<void | Feed>;

}

export const getFeed = container.get<GetFeed>(TYPES.GetFeed);