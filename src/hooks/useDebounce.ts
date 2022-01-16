import React from 'react';

const useDebounce = (callback: () => void, [ms, deps]: [number, readonly any[] | any]) => {
  const depedencyList = React.useMemo(() => (Array.isArray(deps) ? deps : [deps]), [deps]);

  const [isWaiting, setIsWaiting] = React.useState(false);

  React.useEffect(() => {
    let callbackReturn: any = null;

    const timeoutId = setTimeout(() => {
      callbackReturn = callback();
      setIsWaiting(false);
    }, ms);

    return () => {
      clearTimeout(timeoutId);
      setIsWaiting(true);
      if (typeof callbackReturn === 'function') callbackReturn();
    };
  }, depedencyList);

  return { isWaiting };
};

export { useDebounce };
export default useDebounce;
