interface Props {
  searches: string[];

  onLabelClicked: (search: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li onClick={() => onLabelClicked(search)} key={search}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
