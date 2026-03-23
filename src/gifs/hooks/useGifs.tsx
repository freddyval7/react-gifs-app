import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleSearchClicked = async (search: string) => {
    if (gifsCache.current[search]) {
      setGifs(gifsCache.current[search]);
      return;
    }
  };

  const handleSearch = async (query: string) => {
    const search = query.trim().toLowerCase();

    if (search.length === 0) return;

    if (previousSearches.includes(search)) return;

    setPreviousSearches([query, ...previousSearches].splice(0, 8));

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);

    gifsCache.current[search] = gifs;
  };

  return {
    // Values
    gifs,

    // Methods / Actions
    handleSearch,
    handleSearchClicked,
    previousSearches,
  };
};
