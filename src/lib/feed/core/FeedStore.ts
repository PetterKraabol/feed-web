import { writable, type Writable } from "svelte/store";
import { Feed } from "./model/Feed";

export const feed: Writable<Feed> = writable(Feed.empty());