export interface IconifyBundle {
  prefix: string;
  icons: Record<string, unknown>;
}

export const isIcon = (val?: Attribute): boolean => !!val && /^[a-z,-]+:[a-z,-]+$/.test(val);

export { default as IconTest } from './IconTest.svelte';

import Icon from './Icon.svelte';
export default Icon;
