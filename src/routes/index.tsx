import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import lqip from "/src/media/images/patrizier-lqip.webp";
import Image from "/src/media/images/patrizier.png?format=avif&jsx";

import { SiGithub, SiKeybase } from "@qwikest/icons/simpleicons";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main class="index">
      <Image
        decoding="sync"
        loading="eager"
        alt="Patrician logo"
        style={{
          backgroundImage: `url("${lqip}")`,
        }}
      />
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
