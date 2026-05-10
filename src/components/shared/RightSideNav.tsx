import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import type { RouteId } from "../../lib/routes";
import { ROUTES } from "../../lib/routes";

const baseNavButtonClassName =
  "flex h-10 w-full items-center justify-center transition hover:cursor-pointer";

const activeNavButtonClassName = `${baseNavButtonClassName} bg-stone-200 text-stone-900`;
const inactiveNavButtonClassName = `${baseNavButtonClassName} text-stone-500 hover:bg-stone-200 hover:text-stone-900`;

type RightSideNavProps = {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
};

export default function RightSideNav({
  currentRoute,
  onNavigate,
}: RightSideNavProps) {
  return (
    <aside className="max-w-10 flex flex-1 flex-col border-l border-stone-200/80 bg-stone-50/95">
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
