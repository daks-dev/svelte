export interface NavBrand {
  home: string;
  page: string;
  alt: string;
  size: number | string;
  custom: Record<string, ClassName>;
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

import Nav from './Nav.js';
export default Nav;
