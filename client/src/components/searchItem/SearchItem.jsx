import "./searchItem.css";
import { Link } from "react-router-dom";


const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
    <img src={item.photos[0]} alt="" className="siImg" />
    <div className="siDesc">
      <h1 className="siTitle">{item.name}</h1>
      <span className="siDistance">{item.distance}m do centra</span>
      <span className="siTaxiOp">Besplatan prevoz do autobuske stanice</span>
      <span className="siSubtitle">
        Smeštaj sa klimom
      </span>
      <span className="siFeatures">{item.desc}</span>
      <span className="siCancelOp">Besplatno otkazivanje</span>
      <span className="siCancelOpSubtitle">
        Možete otkazati kasnije, režervišite po ovoj ceni samo danas!
      </span>
    </div>
    <div className="siDetails">
      {item.rating && <div className="siRating">
        <span>Odnlično</span>
        <button>{item.rating}</button>
      </div>}
      <div className="siDetailTexts">
        <span className="siPrice">{item.cheapestPrice} RSD</span>
        <span className="siTaxOp">Ukljućuje poreze i naknade</span>
        <Link to={`/hotels/${item._id}`}>
        <button className="siCheckButton">Pogledajte dostupnost</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default SearchItem;
