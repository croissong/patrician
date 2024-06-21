start:
  bun start -- --host

buildNServe:
  bun run build
  wrangler pages dev ./dist


update:
  bun update -f --latest
  bun pm untrusted

new:
  bun create qwik@latest basic . --force
