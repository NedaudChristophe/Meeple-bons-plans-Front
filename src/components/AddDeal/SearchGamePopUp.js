/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';

import { saveChoosedGame, changeDealGame } from '../../actions/deal';

// == Composant
function SearchGamePopUp({
  ToggleSearchGame,
  gameList,

}) {
  const dispatch = useDispatch();
  const handleSelectGame = (event) => {
    console.log('id', event.currentTarget.value);
    const choosedGame = gameList.filter((game) => game.id == event.currentTarget.value);
    console.log('jeu choisi', choosedGame);
    dispatch(saveChoosedGame(choosedGame));
    dispatch(changeDealGame(''));
    ToggleSearchGame();
  };
  return (
    <div className="login-popup">
      <div className="form-popup searchgamepopup">
        <div action="#" className="form-container">
          <div id="title_login"><FontAwesomeIcon icon={faMagnifyingGlass} />Résultats de votre recherche<span><button aria-label="Fermer" type="button" className="cancel" onClick={ToggleSearchGame}><FontAwesomeIcon icon={faXmark} /></button></span>
          </div>
          <div className="results_searchgame">
            <ul>
              {gameList.map((game) => (
                <li value={game.id} key={game.id} onClick={handleSelectGame}><img src={game.image} alt="" /><span>{game.name}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchGamePopUp.propTypes = {
  ToggleSearchGame: PropTypesLib.func.isRequired,
  gameList: PropTypesLib.array.isRequired,
};

SearchGamePopUp.defaultProps = {
};

// == Export
export default SearchGamePopUp;
