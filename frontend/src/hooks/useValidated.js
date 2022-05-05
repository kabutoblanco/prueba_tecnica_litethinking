import { useState, useEffect } from 'react';

export default function useValidated(value, isRequired = false) {
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    setIsValidated(false);
    if (typeof value === 'string' && value !== '') {
      setIsValidated(true);
    }
    if (typeof value === 'number' && (isRequired ? value > 0 : value > -1)) {
      setIsValidated(true);
    }
    if (typeof value === 'object' && value) {
      setIsValidated(true);
    }
  }, [value]);

  return !isValidated;
}
