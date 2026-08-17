start:
  bun start --host

buildNServe:
  bun run build
  bun run serve


update:
  nix flake update
  bun update -f --latest
  bun pm untrusted

new:
  bun create qwik@latest basic . --force
