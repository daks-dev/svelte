declare interface Metadata {
  [x: string]: string | null | undefined;
}

declare type Timeout = string | undefined | number | NodeJS.Timeout;

declare type ClassName = string | string[] | null | undefined;

declare namespace App {
  interface Locals {
    userid: string;
  }

  declare module '*.yml' {
    const value: Record<string, unknown>;
    export default value;
  }

  declare module '*.yaml' {
    const value: Record<string, unknown>;
    export default value;
  }
}
