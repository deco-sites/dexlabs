// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $Hero from "./islands/Hero.tsx";
import * as $ImageSelector from "./islands/ImageSelector.tsx";
import * as $ItemsSearcher from "./islands/ItemsSearcher.tsx";
import * as $Video from "./islands/Video.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/Header.tsx": $Header,
    "./islands/Hero.tsx": $Hero,
    "./islands/ImageSelector.tsx": $ImageSelector,
    "./islands/ItemsSearcher.tsx": $ItemsSearcher,
    "./islands/Video.tsx": $Video,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
