// import { useState, useEffect } from "react";

// type UseUserPreferences<T> = {
//   preference: T | null;
//   setPreference: (value: T) => void;
//   clearPreference: () => void;
// };

// export function useUserPreferences<T>(key: string, defaultValue: T): UseUserPreferences<T> {
//   const [preference, setPreferenceState] = useState<T | null>(null);

//   useEffect(() => {
//     // Load the preference from localStorage on mount
//     const storedPreference = localStorage.getItem(key);
//     if (storedPreference) {
//       setPreferenceState(JSON.parse(storedPreference));
//     } else {
//       setPreference(defaultValue); // Set default if no preference exists
//     }
//   }, [key, defaultValue]);

//   const setPreference = (value: T) => {
//     setPreferenceState(value);
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   const clearPreference = () => {
//     setPreferenceState(null);
//     localStorage.removeItem(key);
//   };

//   return {
//     preference,
//     setPreference,
//     clearPreference,
//   };
// }
