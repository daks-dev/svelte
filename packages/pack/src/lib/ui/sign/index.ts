export type SignOptions = {
  icon: string;
} & {
  [x in 'link' | 'small' | 'light' | 'dark' | 'auto']: boolean;
};

import Sign from './Sign.svelte';
export default Sign;
