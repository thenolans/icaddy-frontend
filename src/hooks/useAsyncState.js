import { useEffect, useState } from "react";

export default function useAsyncState(loadState) {
  const [state, setState] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    (async () => {
      setError(undefined);
      setIsLoading(true);
      try {
        const newState = await loadState();
        if (!didCancel) {
          setState(newState);
        }
      } catch (newError) {
        if (!didCancel) {
          setError(newError);
        }
      } finally {
        if (!didCancel) {
          setIsLoading(false);
        }
      }
    })();
    return () => {
      didCancel = true;
    };
  }, [loadState]);

  return [state, { error, isLoading }];
}
