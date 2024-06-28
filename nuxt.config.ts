// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

const SRC_DIR = resolve(__dirname, "src");

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: SRC_DIR,
})
