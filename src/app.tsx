import * as ReactDOM from "react-dom/client";

const App = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center mx-10">
      <h1 className="text-4xl font-bold text-gray-800">Nautilus</h1>
    </div>
  </div>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App />);
}

render();
