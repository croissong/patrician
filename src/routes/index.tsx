import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import imageUrl from "/src/media/images/patrizier.avif";

import { SiGithub, SiKeybase } from "@qwikest/icons/simpleicons";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main class="index">
      <a href="/images/patrizier.png" title="Patrician logo HQ">
        <img src={imageUrl} decoding="async" loading="eager" alt="Patrician logo" />
      </a>
      <div class="links">
        <a href="https://github.com/Croissong">
          <SiGithub />
        </a>
        <a href="https://keybase.io/croissong">
          <SiKeybase />
        </a>
      </div>
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
