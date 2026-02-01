import { NavLink } from "react-router-dom";
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
    <aside className="flex flex-col flex-1 border-r border-gray-200 p-4 text-sm min-w-[250px] max-w-fit overflow-y-auto">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "text-left w-full flex items-center gap-x-2 " +
                  (isActive && "active-hard")
                }
              >
                <span className="material-symbols-rounded icon">contract</span>
                Manuscript
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prompts"
                className={({ isActive }) =>
                  "text-left w-full flex items-center gap-x-2 " +
                  (isActive && "active-hard")
                }
              >
                <span className="material-symbols-rounded icon">lightbulb</span>
                Writing prompts
              </NavLink>
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
              <li className="text-gray-400 italic text-center">No chapters</li>
            )}

            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "text-left w-full flex items-center gap-x-2 " +
                    (isActive && "active-soft")
                  }
                >
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
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-grow" />
      <div>
        <ul className="space-y-1 dropdown-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "text-left w-full flex items-center gap-x-2 " +
                (isActive && "active-hard")
              }
            >
              <span className="material-symbols-rounded icon">settings</span>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "text-left w-full flex items-center gap-x-2 " +
                (isActive && "active-hard")
              }
            >
              <span className="material-symbols-rounded icon">
                deployed_code
              </span>
              Developer
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
