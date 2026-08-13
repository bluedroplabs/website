/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CANVAS_SITE_URL: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_MARKER_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
