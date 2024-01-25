import { useState, useEffect } from 'react';

const useLoading = (externalLoading = true, timeout = 2000) => {
  const [isLoading, setIsLoading] = useState(externalLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timeout);

    // Clear the timeout if the component unmounts or if isLoading changes
    return () => clearTimeout(timer);
  }, [externalLoading, timeout]);

  return [isLoading, setIsLoading];
};

export default useLoading;
