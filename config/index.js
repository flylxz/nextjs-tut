const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : `https://nextjs-tut-19qmn7xc9.vercel.app`;
