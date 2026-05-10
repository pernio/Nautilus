import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGear, faHammer } from "@fortawesome/free-solid-svg-icons";
import type { RouteId } from "../../lib/routes";
import { ROUTES } from "../../lib/routes";

const baseNavButtonClassName =
  "flex h-10 w-full items-center justify-center transition hover:cursor-pointer";

const activeNavButtonClassName = `${baseNavButtonClassName} bg-stone-200 text-stone-900`;
const inactiveNavButtonClassName = `${baseNavButtonClassName} text-stone-500 hover:bg-stone-200 hover:text-stone-900`;

type LeftSideNavProps = {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
};

export default function LeftSideNav({ currentRoute, onNavigate }: LeftSideNavProps) {
  return (
    <aside className="max-w-10 flex flex-1 flex-col border-r border-stone-200/80 bg-stone-50/95">
      <button
        type="button"
        title="Manuscript"
        className={currentRoute === ROUTES.manuscript ? activeNavButtonClassName : inactiveNavButtonClassName}
        onClick={() => onNavigate(ROUTES.manuscript)}
      >
        <FontAwesomeIcon icon={faFile} />
      </button>
      <div className="flex-1" />
      <button
        type="button"
        title="Developer"
        className={`${currentRoute === ROUTES.dev ? activeNavButtonClassName : inactiveNavButtonClassName} hidden dev:flex`}
        onClick={() => onNavigate(ROUTES.dev)}
      >
        <FontAwesomeIcon icon={faHammer} />
      </button>
      <button
        type="button"
        title="Settings"
        className={currentRoute === ROUTES.settings ? activeNavButtonClassName : inactiveNavButtonClassName}
        onClick={() => onNavigate(ROUTES.settings)}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
    </aside>
  );
}
