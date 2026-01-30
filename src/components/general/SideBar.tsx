import { useState } from "react";

type Chapter = {
  id: string;
  title: string;
};

type Props = {
  chapters: Chapter[];
};

export default function SideBar({ chapters }: Props) {
  const [workspacesOpen, setWorkspacesOpen] = useState(true);
  const [chaptersOpen, setChaptersOpen] = useState(true);

  return (
    <aside className="w-64 flex flex-col flex-1 border-r border-gray-200 p-4 text-sm max-w-fit">
      {/* Workspaces */}
      <div className="mb-4">
        <button
          onClick={() => setWorkspacesOpen((v) => !v)}
          className="flex w-full items-center justify-between font-medium text-gray-700 hover:text-black"
        >
          Workspaces
          <span className="text-xs">{workspacesOpen ? "▾" : "▸"}</span>
        </button>

        {workspacesOpen && (
          <ul className="mt-2 space-y-1 pl-2">
            <li>
              <button className="hover:underline text-left w-full">
                Personal
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full">
                Team Alpha
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Chapters */}
      <div>
        <button
          onClick={() => setChaptersOpen((v) => !v)}
          className="flex w-full items-center justify-between font-medium text-gray-700 hover:text-black"
        >
          Chapters
          <span className="text-xs">{chaptersOpen ? "▾" : "▸"}</span>
        </button>

        {chaptersOpen && (
          <ul className="mt-2 space-y-1 pl-2">
            {chapters.length === 0 && (
              <li className="text-gray-400 italic">No chapters</li>
            )}

            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <button className="hover:underline text-left w-full">
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
