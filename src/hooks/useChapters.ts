import { useEffect, useState } from "react";
import { ChapterProgress } from "../config/ChapterProgress";

type Chapter = {
  id: string;
  title: string;
  progress: ChapterProgress;
};

export default function useChapters(bookId: string) {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    async function loadChapters() {
      const fsChapters = await window.nautilus.readFile(
        `books/${bookId}/chapters/index.json`,
      );

      if (fsChapters) {
        const parsed: Chapter[] = JSON.parse(fsChapters);
        setChapters(parsed);
      }
    }

    loadChapters();
  }, [bookId]);

  return chapters;
}
