import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import imgUrl from "../../public/patrizier_hex.png";

import { LuGithub } from "@qwikest/icons/lucide";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="index">
      <img src={imgUrl}></img>
      <div class="post-line"></div>
      <div class="link">
        <LuGithub /> <a href="https://github.com/Croissong">Github</a>
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
