import "./TitleBar.css";
import logo from "../images/brewdoglogo-removebg-preview (1).png";

const TitleBar = ({ beers, onBeerSelected }) => {
  const menuOptions = beers.map((beer, index) => {
    return (
      <option value={index} key={beer.name}>
        {beer.name}
      </option>
    );
  });

  const handleSelectChange = ({ target: { value } }) => {
    if (value === "all") {
      onBeerSelected(beers);
    } else {
      const chosenBeer = beers[value];
      onBeerSelected(chosenBeer);
    }
  };

  return (
    <div className="menu-container">
      <div className="hero">
        <img id="logo" src={logo} alt="Logo" />

        <h1 className="title">BREWDOG MENU</h1>
      </div>
      <hr className="break"></hr>

      <select defaultValue="" onChange={handleSelectChange}>
        <option value="">Select Beer</option>
        <option value="all">Shop Entire Range</option>
        {menuOptions}
      </select>
      <hr className="break"></hr>
    </div>
  );
};

export default TitleBar;
