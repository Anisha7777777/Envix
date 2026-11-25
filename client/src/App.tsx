import { useEffect, useState } from 'react';

type ApiState = 'checking' | 'ready' | 'unavailable';

export default function App() {
  const [apiState, setApiState] = useState<ApiState>('checking');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/health', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('API unavailable');
        setApiState('ready');
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === 'AbortError') return;
        setApiState('unavailable');
      });
    return () => controller.abort();
  }, []);

  return (
    <main className="shell">
      <p className="eyebrow">ENVIX</p>
      <h1>Understand a repository before you run it.</h1>
      <p>Repository analysis will appear here as we build it.</p>
      <p role="status" className="status">
        {apiState === 'checking' && 'Checking backend connection…'}
        {apiState === 'ready' && 'Backend connected'}
        {apiState === 'unavailable' && 'Backend unavailable. Start the server and refresh.'}
      </p>
    </main>
  );
}
