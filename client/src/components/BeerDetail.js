import { useState } from "react";
import "./BeerDetail.css";

const BeerDetail = ({ beer, newFavourites }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isPairingExpanded, setPairingExpanded] = useState(false);

  const getFoodPairings = () => {
    const pairings = beer.food_pairing;
    const foods = pairings.map((food) => <li key={food}>{food}</li>);

    return <ul>{foods}</ul>;
  };

  const handleButtonClick = () => {
    newFavourites(beer);
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleFoodPairingExpanded = () => {
    setPairingExpanded(!isPairingExpanded);
  };

  return (
    <article className="beer-card">
      <div className="beer-card-image-container">
        <img className="beer-card-image" src={beer.image_url} alt={beer.name} />
      </div>
      <button className="fav-btn" onClick={handleButtonClick}>
        Add to Basket
      </button>

      <div className="beer-card-info">
        <p className="beer-card-info-name">
          {beer.name} {beer.abv}
        </p>

        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
      </div>

      <div className="description-container">
        <p>Description</p>
        {beer ? (
          <button onClick={toggleDescriptionExpanded}>
            {isDescriptionExpanded ? "-" : "+"}
          </button>
        ) : null}
      </div>

      {isDescriptionExpanded && (
        <div className="beer-card-description">
          <p className="description-box">{beer.description}</p>
        </div>
      )}

      <div className="pairings-container">
        <p>Food Pairings</p>
        {beer ? (
          <button onClick={toggleFoodPairingExpanded}>
            {isPairingExpanded ? "-" : "+"}
          </button>
        ) : null}
      </div>

      {isPairingExpanded && (
        <div className="beer-card-pairings">{getFoodPairings()}</div>
      )}
    </article>
  );
};

export default BeerDetail;
