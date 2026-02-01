export {};

declare global {
  interface Window {
    nautilus: {
      readFile(path: string): Promise<string>;
      writeFile(path: string, content: string): Promise<void>;
      ensureDir(path: string): Promise<void>;
      root: string;
    };
  }
}
