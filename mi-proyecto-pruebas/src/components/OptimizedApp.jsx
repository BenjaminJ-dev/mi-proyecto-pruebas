import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function OptimizedApp() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default OptimizedApp;