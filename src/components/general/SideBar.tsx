import { useState } from "react";
import { Link } from "react-router-dom";
import { ChapterProgress } from "../../config/ChapterProgress";

type Chapter = {
  id: string;
  title: string;
  progress: ChapterProgress;
};

type Props = {
  workspaceOpen: boolean;
  chaptersOpen: boolean;
  toggleWorkspace: () => void;
  toggleChapters: () => void;
  chapters: Chapter[];
};

export default function SideBar({
  workspaceOpen,
  chaptersOpen,
  toggleWorkspace,
  toggleChapters,
  chapters,
}: Props) {
  return (
    <aside className="flex flex-col flex-1 border-r border-gray-200 p-4 text-sm min-w-[250px] max-w-fit">
      {/* Workspaces */}
      <div className="mb-4">
        <button
          onClick={toggleWorkspace}
          className="flex w-full items-center gap-x-3 font-medium text-gray-500 hover:text-black"
        >
          <span
            className={
              "material-symbols-rounded icon " +
              (workspaceOpen ? "rotate-90" : "")
            }
          >
            keyboard_arrow_right
          </span>
          Workspace
        </button>

        {workspaceOpen && (
          <ul className="mt-2 space-y-1 dropdown-menu">
            <li>
              <Link to="/" className="text-left w-full">
                <span className="material-symbols-rounded icon">contract</span>
                Manuscript
              </Link>
            </li>
            <li>
              <Link to="/prompts" className="text-left w-full">
                <span className="material-symbols-rounded icon">lightbulb</span>
                Writing prompts
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Chapters */}
      <div>
        <button
          onClick={toggleChapters}
          className="flex w-full items-center gap-x-3 font-medium text-gray-500 hover:text-black"
        >
          <span
            className={
              "material-symbols-rounded icon " +
              (chaptersOpen ? "rotate-90" : "")
            }
          >
            keyboard_arrow_right
          </span>
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
                  <span
                    className="material-symbols-rounded icon"
                    style={
                      chapter.progress === ChapterProgress.Finished
                        ? { color: "#21c45d" }
                        : chapter.progress === ChapterProgress.InProgress
                          ? { color: "#fbbf24" }
                          : { color: "#9ca3af" }
                    }
                  >
                    {chapter.progress === ChapterProgress.Finished
                      ? "check_circle"
                      : chapter.progress === ChapterProgress.InProgress
                        ? "progress_activity"
                        : "radio_button_unchecked"}
                  </span>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <ul className="space-y-1 dropdown-menu">
          <li>
            <Link to="/" className="text-left w-full">
              <span className="material-symbols-rounded icon">settings</span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
