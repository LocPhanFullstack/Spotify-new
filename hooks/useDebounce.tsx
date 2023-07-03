import { useEffect, useState } from 'react';

// This custom hook will help to get a result after 0.5s of the user not typing anything
// => will not reuse APIs call
function useDebounce<T>(value: T, delay?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
