import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./projects.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <section class="projects">
      <h2>Projects</h2>
      <ul class="project-links">
        <li>
          <a href="https://github.com/croissong/gitwatch-rs">gitwatch-rs</a> -
          CLI to watch a local git repo and automatically commit changes
        </li>
        <li class="personal-projects">
          <a href="https://github.com/croissong/dotfiles">dotfiles</a> - There's
          no place like $HOME
        </li>
        <li>
          <a href="https://github.com/croissong/system">system</a> - I use NixOS
          btw
        </li>
        <li>
          <a href="https://github.com/croissong/emacs">emacs</a> &gt; Vim
        </li>
      </ul>
    </section>
  );
});
