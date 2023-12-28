import { ExpressContext } from '@/server';
import { TRPCError, initTRPC } from '@trpc/server';
import { PayloadRequest } from 'payload/types';

const t = initTRPC.context<ExpressContext>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
const middleware = t.middleware;

const isAuth = middleware(async ({ ctx, next }) => {
  const req = ctx.req as PayloadRequest;
  const { user } = req as PayloadRequest;

  if (!user || !user.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({ ctx: { user } });
});

export const privateProcedure = t.procedure.use(isAuth);
