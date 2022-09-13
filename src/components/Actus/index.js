// les styles et autres
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ActuCard from "./ActuCard";

//On creer le composant
function Actus() {
  //le use selector qui au chargement de la page envoi une action au middleware pour placer les lements de la route dans le state
  const { newsList } = useSelector((state) => state.deal);
  console.log("les actus =>", newsList);
  return (
    <div className="pseudo-body">
      <div className="main-contener">
        {newsList.map((actu) => (
          <ActuCard key={actu.id} id={actu.id} {...actu} />
        ))}
        </div>
      {/*le menu pour faire defiler les pages */}
      <div className="menu-page">
        <button className="button-previous" type="button">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <span className="page-number">1</span>
        <button className="button-next" type="button">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Actus;
