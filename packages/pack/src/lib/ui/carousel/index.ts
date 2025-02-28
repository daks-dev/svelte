export interface Custom {
  button: string | string[];
  progress: string | string[];
  item: string | string[];
  inner: Record<string, string | string[]>;
}

export type Easing = (x: number) => number;

export type Tweening = (ms?: number) => {
  duration: number;
  delay: number;
  easing: Easing;
};

export type Show = number | ((x: number) => number);

export type Controls = string | string[];

export type Loaded = undefined | ((x?: Event | HTMLElement) => void);

export { default as Carousel } from './Carousel.svelte';
export { default as CarouselKit } from './CarouselKit.svelte';
