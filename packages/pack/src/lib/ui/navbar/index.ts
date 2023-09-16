/*
export interface Custom {
  menu: string | string[];
  link: string | string[];
  button: string | string[];
  icon: string | string[];
}
*/

export type Custom = Record<'menu' | 'link' | 'button' | 'icon', string | string[]>;

export { default as NavbarMenu } from './NavbarMenu.svelte';
export { default as NavbarWrapper } from './NavbarWrapper.svelte';

import Navbar from './Navbar.svelte';
export default Navbar;
