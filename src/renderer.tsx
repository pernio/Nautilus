import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Nautilus</h1>
        <p className="mt-2 text-zinc-500">Offline-first writing studio</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);