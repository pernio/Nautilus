import * as ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./i18n";
import Header from "./components/general/Header";
import SideBar from "./components/general/SideBar";

import Manuscript from "./pages/Manuscript";
import Prompts from "./pages/Prompts";
import { ChapterProgress } from "./config/ChapterProgress";
import useMenu from "./hooks/useMenu";

const App = () => {
  const {
    sideBarOpen,
    workspaceOpen,
    chaptersOpen,
    toggleSideBar,
    toggleWorkspace,
    toggleChapters,
  } = useMenu();

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-super scroll-smooth">
        <Header sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar} />

        <div className="flex flex-row grow">
          {sideBarOpen && (
            <SideBar
              workspaceOpen={workspaceOpen}
              chaptersOpen={chaptersOpen}
              toggleWorkspace={toggleWorkspace}
              toggleChapters={toggleChapters}
              chapters={[
                {
                  id: "1",
                  title: "Introduction",
                  progress: ChapterProgress.Finished,
                },
                {
                  id: "2",
                  title: "Getting Started",
                  progress: ChapterProgress.InProgress,
                },
                {
                  id: "3",
                  title: "Advanced Topics",
                  progress: ChapterProgress.NotStarted,
                },
              ]}
            />
          )}

          <main className="flex flex-col flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Manuscript />} />
              <Route path="/prompts" element={<Prompts />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

function render() {
  const root = ReactDOM.createRoot(
    document.getElementById("app") as HTMLElement,
  );
  root.render(<App />);
}

render();
