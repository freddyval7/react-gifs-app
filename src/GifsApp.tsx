import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleSearchClicked = (search: string) => {
    console.log({ search });
  };

  const handleSearch = async (query: string) => {
    const search = query.trim().toLowerCase();

    if (search.length === 0) return;

    if (previousSearches.includes(search)) return;

    setPreviousSearches([query, ...previousSearches].splice(0, 8));

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);
  };

  return (
    <>
      {/* {Header} */}
      <CustomHeader title="Gifs Search" description="Find the best gif" />

      {/* {SearchContainer} */}
      <SearchBar placeholder="Search for gifs" onQuery={handleSearch} />

      {/* Previous searches */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
