import { useState } from "react";
import { Link } from "react-router-dom";

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
    <aside className="flex flex-col flex-1 border-r border-gray-200 p-4 text-sm min-w-[250px] max-w-fit">
      {/* Workspaces */}
      <div className="mb-4">
        <button
          onClick={() => setWorkspacesOpen((v) => !v)}
          className="flex w-full items-center justify-between font-medium text-gray-500 hover:text-black"
        >
          Workspaces
          <span className="text-xs">{workspacesOpen ? "▾" : "▸"}</span>
        </button>

        {workspacesOpen && (
          <ul className="mt-2 space-y-1 dropdown-menu">
            <li>
              <Link to="/" className="text-left w-full">
                <span>O</span>
                Manuscript
              </Link>
            </li>
            <li>
              <Link to="/prompts" className="text-left w-full">
                <span>O</span>
                Writing prompts
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Chapters */}
      <div>
        <button
          onClick={() => setChaptersOpen((v) => !v)}
          className="flex w-full items-center gap-x-3 font-medium text-gray-500 hover:text-black"
        >
          <span className="text-xs">{chaptersOpen ? "▾" : "▸"}</span>
          Chapters
        </button>

        {chaptersOpen && (
          <ul className="mt-2 space-y-1 dropdown-menu">
            {chapters.length === 0 && (
              <li className="text-gray-400 italic">No chapters</li>
            )}

            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link to="/" className="text-left w-full">
                  <span>O</span>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
