import { deleteBasketItem } from "./BasketService";
import "./FavouriteBeers.css";

const FavouriteBeers = ({ beers, handleRemoveBeer }) => {
  const handleDelete = (id) => {
    deleteBasketItem(id).then(() => {
      handleRemoveBeer(id);
    });
  };
  return (
    <div className="shopping-basket">
      {beers.length ? (
        <ul>
          {beers.map((beer) => (
            <div>
              <li>{beer.name}</li>
              <button onClick={() => handleDelete(beer._id)}>🗑</button>
            </div>
          ))}
        </ul>
      ) : (
        <p className="empty-basket">Nothing yet...</p>
      )}
    </div>
  );
};

export default FavouriteBeers;
