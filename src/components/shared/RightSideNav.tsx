import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import type { RouteId } from "../../lib/routes";
import { ROUTES } from "../../lib/routes";

const baseNavButtonClassName =
  "flex h-10 w-full items-center justify-center transition hover:cursor-pointer";

const activeNavButtonClassName = `${baseNavButtonClassName} text-stone-600`;
const inactiveNavButtonClassName = `${baseNavButtonClassName} text-stone-400 hover:text-stone-600`;

type RightSideNavProps = {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
};

export default function RightSideNav({
  currentRoute,
  onNavigate,
}: RightSideNavProps) {
  return (
    <aside className="max-w-10 flex flex-1 flex-col border-l border-stone-300">
      <button
        type="button"
        title="Timer"
        className={inactiveNavButtonClassName}
      >
        <FontAwesomeIcon icon={faStopwatch} />
      </button>
      <button
        type="button"
        title="Comments"
        className={inactiveNavButtonClassName}
      >
        <FontAwesomeIcon icon={faMessage} />
      </button>
    </aside>
  );
}
