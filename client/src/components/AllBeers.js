import "./AllBeers.css";

const AllBeers = ({ beers, handleButtonClick }) => {
  return (
    <div className="all-beers-container">
      {beers &&
        beers.map((beer) => (
          <button
            className="beer"
            onClick={() => handleButtonClick(beer)}
            key={beer.name}
          >
            <img className="small-img" src={beer.image_url} alt={beer.name} />

            <p className="beer-name">{beer.name} </p>
            <p className="beer-tag">{beer.tagline}</p>

            <p className="percent">{beer.abv}</p>
          </button>
        ))}
    </div>
  );
};

export default AllBeers;
