declare module '*.sass' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.module.sass' {
  const content: { [className: string]: string };
  export = content;
}
