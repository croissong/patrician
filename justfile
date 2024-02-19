start:
  bun start

buildNServe:
  bun build
  wrangler pages dev ./dist


update:
  bun update -f
