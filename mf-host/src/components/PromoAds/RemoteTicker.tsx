import ClientOnly from "@/components/ClientOnly";
import { Suspense, lazy } from "react";

import { ErrorBoundary } from "react-error-boundary";

const Component = lazy(() => import("remote/components/Ticker"));

function RemoteTicker({ ssr = false }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error!</div>}>
        {ssr ? (
          <Component customText="Halo 123" />
        ) : (
          <ClientOnly>
            <Component customText="Halo 123" />
          </ClientOnly>
        )}
      </ErrorBoundary>
    </Suspense>
  );
}

export default RemoteTicker;