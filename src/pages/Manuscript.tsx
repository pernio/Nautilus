import { useState } from "react";
import { useDebouncedEffect } from "../hooks/useDebouncedEffect";
import { ChapterProgress } from "../config/ChapterProgress";

type Props = { bookId: string; chapterId?: string };

export default function Manuscript({
  bookId,
  chapterId = "chapter_a1",
}: Props) {
  const [content, setContent] = useState("");

  useDebouncedEffect(
    () => {
      const filePath = `books/${bookId}/chapters/${chapterId}.txt`;
      const fileData = `title: The howling moon
progress: not_started

${content}`;

      window.nautilus.writeFile(filePath, fileData);
    },
    [content],
    800,
  );

  return (
    <>
      <h1 className="text-[36px] font-serif px-10 py-8">The howling moon</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 w-full px-10 resize-none focus:outline-none font-serif text-lg leading-7"
        placeholder="Begin writing your story..."
      />
    </>
  );
}
