import { useState, useEffect } from "react";
import { Profile } from "../utils/GlobalInterfaces";

export function useLocalStorage(key: string, property: string) {
  const [value, setValue] = useState<string>(() => {
    const getValue = localStorage.getItem(key);
    if (getValue !== null) {
      return getValue;
    }
    return property;
  });

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue, removeValue] as const;
}

export function useLocalStorageProfile(key: string, property: Profile | null) {
  const [value, setValue] = useState<Profile | null>(() => {
    const getValue = localStorage.getItem(key);
    if (getValue !== null) {
      return JSON.parse(getValue);
    }
    return property;
  });

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }, [value]);

  return [value, setValue, removeValue] as const;
}
