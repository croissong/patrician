import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import Image from "/src/media/images/patrizier_hex.png?format=avif&w=256&inline&quality=50&jsx";

import { SiGithub, SiKeybase } from "@qwikest/icons/simpleicons";
import Projects from "./projects";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main class="index">
      <a href="/images/patrizier.png" title="Patrician logo HQ">
        <Image loading="eager" alt="Patrician logo" />
      </a>
      <div class="links">
        <a href="https://github.com/Croissong">
          <SiGithub />
        </a>
        <a href="https://keybase.io/croissong">
          <SiKeybase />
        </a>
      </div>

      <Projects />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Patrician",
  meta: [
    {
      name: "description",
      content: "Patrician",
    },
  ],
};
