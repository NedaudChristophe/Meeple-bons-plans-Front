// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

import magasinImg from '../../assets/img/boutique-logo-philibert.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faGlobe, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

// == Composant
function ShopCard({
    name,
    description,
    adress,
    image,
    url,
}) {
  return (
    <div className="shop-card">
        <div className="shop-card-contener">
          <div className="card-shop-left">
            <img className="img-shop" src={image} alt="Img de la boutique"></img>
          </div>
          <div className="card-shop-right">
            <div className="title-shop">{name}</div>
            <p className="description-shop">{description}
            </p>
            <div className="contener-shop-footer">
              <div className="contener-store">
                
                {(adress===null)?'':<FontAwesomeIcon className="icone-store" icon={faStore} />}
                <span>{adress}</span>
              </div>
              
              <div>
                <button className="button-shop-detail"><a href={url} target="_blank" rel="noreferrer">Voir &ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


ShopCard.prototype = {
  name: PropTypesLib.string.isRequired,
  adress: PropTypesLib.string.isRequired,
  image: PropTypesLib.string.isRequired,
  url: PropTypesLib.string.isRequired,
}

// == Export
export default ShopCard;
