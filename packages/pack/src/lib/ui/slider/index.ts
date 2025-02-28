interface Image {
  src: string;
  width: number;
  height: number;
}

interface Item {
  image: Image;
  title?: string;
  subtitle?: string;
  descripton?: string;
}

interface Custom {
  item?: ClassName;
  image?: ClassName;
  caption?: ClassName;
  button?: ClassName;
  progress?: ClassName;
}

type Easing = (x: unknown) => unknown;

type Tweening = (ms?: number) => {
  duration: number;
  delay: number;
  easing: Easing;
};

type Show = number | ((x: number) => number);

type Controls = string | string[];

type Loaded = undefined | ((x?: Event | HTMLElement) => void);

export type { Image, Item, Custom, Show, Easing, Tweening, Controls, Loaded };

import Slider from './Slider.svelte';
export default Slider;
