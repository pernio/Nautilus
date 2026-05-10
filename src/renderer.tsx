import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import LeftSideNav from "./components/shared/LeftSideNav";
import RightSideNav from "./components/shared/RightSideNav";
import { TopNav } from "./components/shared/TopNav";
import "./index.css";
import { syncFeatureFlagAttributes } from "./lib/featureFlags";
import {
  getCurrentRoute,
  navigateToRoute,
  ROUTES,
  type RouteId,
} from "./lib/routes";
import DevPage from "./pages/dev";
import HomePage from "./pages/home";
import ManuscriptPage from "./pages/manuscript";
import SettingsPage from "./pages/settings";

syncFeatureFlagAttributes();

function App() {
  const [route, setRoute] = useState<RouteId>(() => getCurrentRoute());
  const [showTopNav, setShowTopNav] = useState(true);
  const [showLeftNav, setShowLeftNav] = useState(true);
  const [showRightNav, setShowRightNav] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (nextRoute: RouteId) => {
    navigateToRoute(nextRoute);
  };

  return (
    <main className="flex min-h-screen flex-col text-stone-900">
      <TopNav onNavigate={handleNavigate} showTopNav={showTopNav} />
      <div className="flex flex-1 flex-row *:bg-stone-100">
        {showLeftNav && (
          <LeftSideNav currentRoute={route} onNavigate={handleNavigate} />
        )}
        <div className="flex flex-col flex-1 p-6 max-h-[calc(100vh-2.5rem)]">
          <PageContent
            route={route}
            handleNavigate={handleNavigate}
            setShowTopNav={setShowTopNav}
            setShowLeftNav={setShowLeftNav}
            setShowRightNav={setShowRightNav}
          />
        </div>
        {showRightNav && (
          <RightSideNav currentRoute={route} onNavigate={handleNavigate} />
        )}
      </div>
    </main>
  );
}

type PageContentProps = {
  route: RouteId;
  handleNavigate: (route: RouteId) => void;
  setShowTopNav: (show: boolean) => void;
  setShowLeftNav: (show: boolean) => void;
  setShowRightNav: (show: boolean) => void;
};

function PageContent({
  route,
  handleNavigate,
  setShowTopNav,
  setShowLeftNav,
  setShowRightNav,
}: PageContentProps) {
  switch (route) {
    case ROUTES.manuscript:
      setShowTopNav(true);
      setShowLeftNav(true);
      setShowRightNav(true);
      return <ManuscriptPage />;
    case ROUTES.settings:
      setShowTopNav(true);
      setShowLeftNav(true);
      setShowRightNav(false);
      return <SettingsPage />;
    case ROUTES.dev:
      setShowTopNav(true);
      setShowLeftNav(true);
      setShowRightNav(false);
      return <DevPage />;
    case ROUTES.home:
    default:
      setShowTopNav(false);
      setShowLeftNav(false);
      setShowRightNav(false);
      return <HomePage onNavigate={handleNavigate} />;
  }
}

createRoot(document.getElementById("root")!).render(<App />);
