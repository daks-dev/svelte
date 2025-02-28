interface Custom {
  image?: ClassName;
  caption?: ClassName;
}

type Loaded = undefined | ((x?: Event | HTMLElement) => void);

export type { Custom, Loaded };

import Figure from './Figure.svelte';
export default Figure;
