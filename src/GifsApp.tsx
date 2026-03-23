import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleSearch, handleSearchClicked, previousSearches } =
    useGifs();

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
