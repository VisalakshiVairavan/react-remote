import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ProductTable from './components/ProductTable';
import PriceChart from './components/PriceChart';
import { widgets } from './widgets';
import { mockProducts } from './mock';
import type { Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <div className={`rm-flex rm-min-h-screen rm-flex-col rm-gap-8 rm-p-8 ${theme === 'dark' ? 'rm-bg-stone-900 rm-text-stone-100' : 'rm-bg-stone-50'}`}>
      <button className="rm-self-start" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} theme
      </button>
      <ProductTable data={mockProducts} theme={theme} />
      <PriceChart data={mockProducts} theme={theme} />
      {widgets.map(({ id, component: Widget }) => (
        <Widget key={id} data={mockProducts} theme={theme} />
      ))}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
