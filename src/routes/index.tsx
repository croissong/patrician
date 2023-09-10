import {
  component$,
  useStylesScoped$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

import img from "../../public/patrizier_hex.webp?lqip";

import { SiGithub, SiKeybase } from "@qwikest/icons/simpleicons";

export default component$(() => {
  useStylesScoped$(styles);
  const imgRef = useSignal<HTMLImageElement>();
  const loaded = useSignal(false);
  useVisibleTask$(() => {
    imgRef.value!.decode().then(() => {
      loaded.value = true;
    });
  });

  return (
    <main class="index">
      <img
        ref={imgRef}
        src={img.src}
        alt="Patrician logo"
        style={
          loaded.value
            ? {}
            : {
                background: `url("${img.lqip}")`,
                backgroundSize: "7.5rem",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
        }
      />
      <div class="post-line"></div>
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
