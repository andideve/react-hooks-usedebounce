import React from 'react';

export interface DebounceOptions {
  preventInitialRender?: boolean;
}

const useDebounce = (
  callback: () => void,
  [ms, deps]: [number, React.DependencyList],
  { preventInitialRender = true }: DebounceOptions = {},
) => {
  const [isWaiting, setIsWaiting] = React.useState(false);

  const skipFirstRef = React.useRef(preventInitialRender);

  React.useEffect(() => {
    if (skipFirstRef.current) {
      skipFirstRef.current = false;
      return undefined;
    }

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
  }, deps);

  return { isWaiting } as const;
};

export { useDebounce };
export default useDebounce;
