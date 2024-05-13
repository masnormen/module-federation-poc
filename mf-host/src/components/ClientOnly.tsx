import { ReactNode, useEffect, useState } from "react";

const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) return null;
  return children;
};

export default ClientOnly;
