/// <reference path="../.astro/types.d.ts" />
// src/env.d.ts
export {};

declare global {
  interface Window {
    handleDelete: (id: string) => Promise<void>;
  }
}
