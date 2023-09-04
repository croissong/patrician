import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import imgUrl from "../../public/patrizier_hex.webp?inline";

import { SiGithub, SiKeybase } from "@qwikest/icons/simpleicons";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="index">
      <img src={imgUrl}></img>
      <div class="post-line"></div>
      <div class="links">
        <a href="https://github.com/Croissong">
          <SiGithub />
        </a>
        <a href="https://keybase.io/croissong">
          <SiKeybase />
        </a>
      </div>
    </div>
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
