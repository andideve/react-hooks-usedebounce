import React from 'react';

const useDebounce = (callback: () => void, [ms, deps]: [number, readonly any[] | any]) => {
  const dependencyList = React.useMemo(() => (Array.isArray(deps) ? deps : [deps]), [deps]);

  const [isWaiting, setIsWaiting] = React.useState(false);

  React.useEffect(() => {
    let callbackReturn: unknown = null;

    const timeoutId = setTimeout(() => {
      setIsWaiting(false);
      callbackReturn = callback();
    }, ms);

    return () => {
      clearTimeout(timeoutId);
      setIsWaiting(true);
      if (typeof callbackReturn === 'function') callbackReturn();
    };
  }, dependencyList);

  return { isWaiting } as const;
};

export { useDebounce };
export default useDebounce;
