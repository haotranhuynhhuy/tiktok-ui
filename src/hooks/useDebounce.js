import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debounceValue;
}

useDebounce.propTypes = {
  value: PropTypes.string,
  delay: PropTypes.number
}


export default useDebounce
