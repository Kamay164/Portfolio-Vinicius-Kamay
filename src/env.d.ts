/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** "true" libera a indexação pelos buscadores. Só deve ser ligado no lançamento (Etapa 11). */
  readonly PUBLIC_ALLOW_INDEXING?: string;
  /** Chave pública do Web3Forms (Etapa 7). */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
