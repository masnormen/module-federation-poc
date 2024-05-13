import { ReactNode, useEffect, useState } from "react";

const ServerOnly = ({ children }: { children: ReactNode }) => {
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) return children;
  return null;
};

export default ServerOnly;
