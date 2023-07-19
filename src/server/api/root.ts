import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "./routers/posts";
import { profileRouter } from "./routers/profile";

export const appRouter = createTRPCRouter({
  posts: postsRouter,
  profile: profileRouter,
});

export type AppRouter = typeof appRouter;
