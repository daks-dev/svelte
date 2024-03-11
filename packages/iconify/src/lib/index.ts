export interface IconifyBundle {
  prefix: string;
  icons: Record<string, unknown>;
}

// ui
export { isIcon } from './iconify/index.js';
export { default as Icon } from './iconify/Icon.svelte';
export { default as IconTest } from './iconify/IconTest.svelte';
