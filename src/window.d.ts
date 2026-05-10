export {};

declare global {
  interface Window {
    nautilusWindow: {
      minimize: () => Promise<void>;
      toggleMaximize: () => Promise<boolean>;
      close: () => Promise<void>;
    };
  }
}
