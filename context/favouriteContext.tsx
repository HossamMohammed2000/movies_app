"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FavouritesContextType {
  favourites: number[];
  toggleFavourite: (id: number) => void;
}

const STORAGE_KEY = "favourites";

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

function parseFavourites(value: string | null): number[] {
  if (!value) return [];

  try {
    const parsed: unknown = JSON.parse(value);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is number => Number.isInteger(item));
  } catch {
    return [];
  }
}

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setFavourites(parseFavourites(localStorage.getItem(STORAGE_KEY)));
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites, hasHydrated]);

  const toggleFavourite = useCallback((id: number) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id]
    );
  }, []);

  const value = useMemo(
    () => ({ favourites, toggleFavourite }),
    [favourites, toggleFavourite]
  );

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export function useFavourites() {
  const context = useContext(FavouritesContext);

  if (!context) {
    throw new Error("useFavourites must be used within FavouritesProvider");
  }

  return context;
}
