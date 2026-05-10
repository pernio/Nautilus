import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { RouteId, ROUTES } from "../../src/lib/routes";

type HomePageProps = {
  onNavigate: (route: RouteId) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-row flex-1 justify-center">
      <div className="flex flex-1 flex-col max-w-75 overflow-y-auto">
        <button
          className="flex flex-row p-3 justify-between items-center text-left hover:bg-stone-200 hover:cursor-pointer rounded"
          onClick={() => onNavigate(ROUTES.manuscript)}
        >
          <div className="flex flex-col">
            <p>Workspace 1</p>
            <p>C:/users/user/Desktop</p>
          </div>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Nautilus{" "}
          <span className="text-sm hidden font-normal advanced:inline">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg">Select a workspace to get started</p>
      </div>
    </div>
  );
}
