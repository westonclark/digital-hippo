import next from 'next';

const PORT = Number(process.env.PORT);

export const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
