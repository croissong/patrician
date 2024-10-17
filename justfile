start:
  bun start -- --host

buildNServe:
  bun run build
  wrangler pages dev ./dist


update:
  nix flake update
  bun update -f --latest
  bun pm untrusted

new:
  bun create qwik@latest basic . --force
