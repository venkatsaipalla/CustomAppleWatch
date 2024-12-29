declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
