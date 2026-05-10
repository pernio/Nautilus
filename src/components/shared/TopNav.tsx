import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faWindowMaximize,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { RouteId } from "../../lib/routes";
import { ROUTES } from "../../lib/routes";

const baseNavButtonClassName =
  "app-no-drag flex h-10 w-10 items-center justify-center transition hover:cursor-pointer";

const activeNavButtonClassName = `${baseNavButtonClassName} bg-stone-200 text-stone-900`;
const inactiveNavButtonClassName = `${baseNavButtonClassName} text-stone-500 hover:bg-stone-200 hover:text-stone-900`;

const windowButtonClassName =
  "app-no-drag inline-flex h-10 w-10 items-center justify-center text-stone-600 transition hover:bg-stone-200 hover:text-stone-900 hover:cursor-pointer";

type TopNavProps = {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
  showTopNav: boolean;
};

export function TopNav({ currentRoute, onNavigate, showTopNav }: TopNavProps) {
  return (
    <header
      className={`app-drag flex h-10 items-center ${showTopNav ? "justify-between" : "justify-end"} border-b border-stone-200/80 bg-stone-50/95 pl-10`}
    >
      {showTopNav && (
        <div className="app-no-drag flex items-center">
          <button
            type="button"
            title="Projects"
            className={inactiveNavButtonClassName}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
          </button>
          <button
            type="button"
            title="Search"
            className={inactiveNavButtonClassName}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      )}

      <div className="flex items-center rounded">
        <button
          type="button"
          className={windowButtonClassName}
          onClick={() => window.nautilusWindow.minimize()}
          title="Minimize"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          type="button"
          className={windowButtonClassName}
          onClick={() => window.nautilusWindow.toggleMaximize()}
          title="Maximize"
        >
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
        <button
          type="button"
          className="app-no-drag inline-flex h-10 w-10 items-center justify-center text-stone-600 transition hover:cursor-pointer hover:bg-red-600 hover:text-red-50"
          onClick={() => window.nautilusWindow.close()}
          title="Close"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </header>
  );
}
