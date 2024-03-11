/*
export interface Custom {
  item: string | string[];
  image: string | string[];
  caption: string | string[];
}
*/

export type Custom = Record<'item' | 'image' | 'caption', string | string[]>;

export { default as Gallery } from './Gallery.svelte';
export { default as GalleryKit } from './GalleryKit.svelte';
