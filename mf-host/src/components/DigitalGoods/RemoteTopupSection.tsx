import ClientOnly from "@/components/ClientOnly";
import { Suspense, lazy } from "react";

import { ErrorBoundary } from "react-error-boundary";

const Component = lazy(() => import("remote/components/TopupSection"));

function RemoteTopupSection({ ssr = false }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error!</div>}>
        {ssr ? (
          <Component />
        ) : (
          <ClientOnly>
            <Component />
          </ClientOnly>
        )}
      </ErrorBoundary>
    </Suspense>
  );
}

export default RemoteTopupSection;
