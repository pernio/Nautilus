import * as ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./i18n";
import Header from "./components/general/Header";
import SideBar from "./components/general/SideBar";

import Manuscript from "./pages/Manuscript";
import Prompts from "./pages/Prompts";

const App = () => (
  <HashRouter>
    <div className="flex flex-col min-h-screen font-[system-ui, sans-serif] scroll-smooth">
      <Header />

      <div className="flex flex-row grow">
        <SideBar
          chapters={[
            { id: "1", title: "Introduction" },
            { id: "2", title: "Getting Started" },
            { id: "3", title: "Advanced Topics" },
          ]}
        />

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

function render() {
  const root = ReactDOM.createRoot(
    document.getElementById("app") as HTMLElement,
  );
  root.render(<App />);
}

render();
