export interface NavBrand {
  custom: Record<string, ClassName>;
  label: string;
  home: string;
  page: string;
  alt: string;
  size: number | string;
}

export interface NavItem {
  label: string;
  href: string;
  target: string;
  title: string;
  rel: string;
  itemprop: string;
  role: string;
  handle: (...x: unknown[]) => unknown;
  base: string;
  disallow: boolean;
  style: string;
  links: Partial<NavItem>[];
}

export interface NavSite {
  navbar: {
    links: Partial<NavItem>[];
    scope?: string[];
    brand?: Partial<NavBrand>;
  };
  draver?: {
    links: Partial<NavItem>[];
  };
  footer?: {
    links: Partial<NavItem>[];
    copylink?: Partial<NavItem>;
  };
  allow?: string[];
}

export { default as Link } from './Link.svelte';
export { default as NavHome } from './NavHome.svelte';
export { default as NavPath } from './NavPath.svelte';
export { default as NavToTop } from './NavToTop.svelte';

import Nav from './Nav.js';
export default Nav;
