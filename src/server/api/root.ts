import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "./routers/posts";

export const appRouter = createTRPCRouter({
  posts: postsRouter,
});

export type AppRouter = typeof appRouter;
