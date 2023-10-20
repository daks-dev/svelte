export interface Custom {
  image?: ClassName;
  caption?: ClassName;
}

export type Loaded = ((x?: Event | HTMLElement) => void) | undefined;

export { default as Figure } from './Figure.svelte';
