declare module "*.svg" {
  const content: string;
  export default content;
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
