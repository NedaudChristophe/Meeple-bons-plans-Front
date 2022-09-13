/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

// == Composant
function AddGamePopUp({
  SubmitGame,
  ToggleAddGame,
  ChangeGame,
  ChangeUrl,
  NewGame,
  UrlGame,
}) {
  return (
    <div className="login-popup">
      <div className="form-popup">
        <form action="#" className="form-container" onSubmit={SubmitGame}>
          <div id="title_login"><FontAwesomeIcon icon={faChess} />Ajouter un jeu<span><button aria-label="Fermer" type="button" className="cancel" onClick={ToggleAddGame}><FontAwesomeIcon icon={faXmark} /></button></span></div>
          <label htmlFor="newGame">
            <strong className="subtitle_login">Nom du Jeu</strong>
          </label>
          <input type="text" onChange={ChangeGame} id="newGame" placeholder="Nom du jeu" name="newGame" value={NewGame} required />
          <label htmlFor="urlGame">
            <strong className="subtitle_login">Lien du jeu</strong>
          </label>
          <input type="text" onChange={ChangeUrl} id="urlGame" placeholder="Url du produit : boutique ou autre" name="urlGame" value={UrlGame} required />
          
          <p className="alertaddgame"> <span className="warning-icon"><FontAwesomeIcon icon={faCircleExclamation} /> </span>
              La demande que vous allez effectuer <span>va être traitée manuellement, merci de bien vouloir être patient. </span>
              Le lien (url du produit) doit permettre de récupérer les détails du jeu.
                          En attendant vous pouvez choisir de : <em>"Cochez si le bon plan ne concerne pas un jeu en particulier" </em>
              puis de mettre le nom du jeu en titre ainsi qu'un maximum d'informations dans la description.
              </p>
          <button type="submit" className="btn">Envoyer ma demande</button>
           
        </form> 
      </div>
    </div>
  );
}

AddGamePopUp.propTypes = {
  SubmitGame: PropTypesLib.func.isRequired,
  ToggleAddGame: PropTypesLib.func.isRequired,
  ChangeGame: PropTypesLib.func.isRequired,
  ChangeUrl: PropTypesLib.func.isRequired,
  NewGame: PropTypesLib.string,
  UrlGame: PropTypesLib.string,

};

AddGamePopUp.defaultProps = {
  NewGame: '',
  UrlGame: '',
};

// == Export
export default AddGamePopUp;
