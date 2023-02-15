import { useCallback, useMemo, useState } from "react";

const UseToggle = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = useCallback(() => {
    setStatus((prev) => !prev);
  }, []);

  return useMemo(() => [status, toggleStatus], [status, toggleStatus]);
};

export default UseToggle;
