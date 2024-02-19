start:
  pnpm start

buildNServe:
  pnpm build
  wrangler pages dev ./dist


update:
  pnpm update -L
