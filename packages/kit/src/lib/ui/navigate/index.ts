export interface NavBrand {
  home: string;
  page: string;
  alt?: string;
  size?: number | string;
  class?: Record<string, ClassName>;
}

export interface NavItem {
  label?: string;
  href?: string;
  target?: string;
  title?: string;
  rel?: string;
  itemprop?: string;
  role?: string;
  handle?: (x?: Event) => unknown;
  base?: string;
  disallow?: boolean;
  style?: string;
  links?: NavItem[];
}

export interface NavSite {
  navbar: {
    links: NavItem[];
    scope?: string[];
    brand?: NavBrand;
  };
  draver?: {
    links: NavItem[];
  };
  footer?: {
    links?: NavItem[];
    copylink?: NavItem;
  };
  allow?: string[];
}

import Nav from './Nav.js';
export default Nav;
