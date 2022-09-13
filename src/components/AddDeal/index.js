/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

// == Import de composants
import AddGamePopUp from './AddGamePopUp';  //TODO Pop Up ADD GAME
import SearchGamePopUp from './SearchGamePopUp';  //TODO Pop Up SEARCH GAME

import {
  changeDealTitle,
  changeDealGame,
  toggleConcernAGame,
  changeDealDescription,
  changeDiscountedPrice,
  changeDealUrl,
  changeShippingPrice,
  changeVendor,
  changediscountcode,
  changeExpDate,
  OnChangeGame,
  OnChangeUrl,
  ToggleAddGame,
  fetchFromAddDeal,
  searchGame,
  ToggleSearchGame,
  clearConcernAGameFields,
  changeWarningMessage,
  addNewGame, //<-----------------
} from '../../actions/deal';

import { toggleVisibility, setPopupMessage } from '../../actions/user';

// == Composant
function AddDeal() {
  const dispatch = useDispatch();

  const {
    //On import les sous state
    isAddGame, //TODO Pop Up ADD GAME
    newGame,
    urlGame,
    dealTitle,
    dealGame,
    concernAGame,
    dealDescription,
    dealURL,
    discountedPrice,
    shippingPrice,
    discountCode,
    expirationDate,
    dealVendor,
  } = useSelector((state) => state.deal.addDealForm);
  const isUserLogged = useSelector((state) => state.user.isUserLogged);
  
  const {
    isSearchGame, //TODO Pop Up Search GAME
  } = useSelector((state) => state.deal.searchGame);

  const gameList = useSelector((state) => state.deal.gameList);

  const shopList = useSelector((state) => state.deal.shopList);

  const choosedGame = useSelector((state) => state.deal.choosedGame);
  console.log(choosedGame);

  const warningMessage = useSelector((state) => state.deal.warningMessage);

  const handleChangeDealTitle = (event) => {
    const newDealTitle = event.currentTarget.value;
    dispatch(changeDealTitle(newDealTitle));
  };

  const handleChangeDealGame = (event) => {
    const newDealGame = event.currentTarget.value;
    dispatch(changeDealGame(newDealGame));
  };

  const handleToggleConcernAGame = () => {
    dispatch(toggleConcernAGame());
    dispatch(clearConcernAGameFields());
    //il faut clear le state de choosed game addDealForm discounted et shipping price
  };

  const handleChangeDescription = (event) => {
    const newDescription = event.currentTarget.value;
    dispatch(changeDealDescription(newDescription));
  };

  const handleChangeDiscountedPrice = (event) => {
    const newDiscountedPrice = event.currentTarget.value;
    dispatch(changeDiscountedPrice(newDiscountedPrice));
  };

  //champ controlé de l'URL
  const handleGameUrl = (event) => {
    const newGameUrl = event.currentTarget.value;
    dispatch(changeDealUrl(newGameUrl));
  };

  const handleChangeShippingPrice = (event) => {
    const newShippingPrice = event.currentTarget.value;
    dispatch(changeShippingPrice(newShippingPrice));
  };

  const handleChangeVendor = (event) => {
    const newVendor = event.currentTarget.value;
    dispatch(changeVendor(newVendor));
  };

  const handleChangeDiscountCode = (event) => {
    const newDiscountedCode = event.currentTarget.value;
    dispatch(changediscountcode(newDiscountedCode));
  };

  const handleChangeExpirationDate = (event) => {
    const newExpDate = event.currentTarget.value;
    dispatch(changeExpDate(newExpDate));
  };

 // TODO Pop Up ADD GAME
  /* ------------ AFFICHAGE DES POPUPS ------------ */
  /**
   * Function that toggle the login popup
   */
  const handleClickToggleAddGame = () => {
    dispatch(ToggleAddGame());}

    //ajout de nouveau jeu
  const handleSubmitGame = (event) => {
    event.preventDefault();
    dispatch(addNewGame());
    };

  const handleChangeGame = (event) => {
    const inputAddGame = event.currentTarget.value;
    dispatch(OnChangeGame(inputAddGame));
  };

  const handleChangeUrl = (event) => {
    const inputUrlGame = event.currentTarget.value;
    dispatch(OnChangeUrl(inputUrlGame));
  };
  //Le but est qu'au clic on envoie au back les data dans le state donc on utilise a use selector
  const handleSubmitAddDeal = (event) => {
    event.preventDefault();
    console.log('new deal composant ');
    if (concernAGame === false && choosedGame === '') {
      dispatch(changeWarningMessage('Merci d\'ajouter le jeu correspondant au bon plan'));
    }else {
      dispatch(fetchFromAddDeal());
      dispatch(ToggleAddGame())
    }
  };

  // TODO Pop Up ADD GAME
  const handleClickToggleSearchGame = () => {
    dispatch(ToggleSearchGame());
  };

  const handleSearchGame = () => {
    console.log('test search game');
    if (dealGame !== '') {
      dispatch(searchGame(dealGame)); //TODO onClick={handleSearchGame}
      handleClickToggleSearchGame();
    }
  };

  const handleConnexion = () => {
    dispatch(toggleVisibility('isLoginVisible'));
  };

  if (isUserLogged) {
    return (
      <div className="form-section">
        <form onSubmit={handleSubmitAddDeal}>
          <div className="form-title"><FontAwesomeIcon icon={faTags} /><span className="form-span">Ajouter un bon plan</span></div>
          <div className="adddeal-header">
            <label className="form-secondarytitle" htmlFor="deal-title">TITRE</label>
            <input className="form-input" type="text" id="deal-title" placeholder="Titre du bon plan" value={dealTitle} onChange={handleChangeDealTitle} required />
            <div className="gameornot">
              <input type="checkbox" id="game-concern" checked={concernAGame ? 'checked' : ''} onChange={handleToggleConcernAGame} />
              <label htmlFor="game-concern">Cochez si le bon plan ne concerne pas un jeu en particulier</label>
            </div>
            {(concernAGame) ? '' : (
              <div>
                <label className="form-secondarytitle" htmlFor="deal-search">NOM DU JEU</label>
                <div className="searchgame">
                  <input className="form-input" type="text" id="deal-search" placeholder="Saisissez votre recherche" value={dealGame} onChange={handleChangeDealGame} />
                  <button className="button-searchgame" type="button" onClick={handleSearchGame}> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className="adddeal-right-element"><span className="missing-game">Jeu manquant ?</span>
                  <button className="button-addgame" onClick={handleClickToggleAddGame} type="button">Suggérer un jeu</button>
                </div>
                {(choosedGame === '') ? '' : <span className="adddeal-game">{choosedGame[0].name}</span>}
              </div>
            )}
          </div>
          <div className="content">
            <label className="form-secondarytitle" htmlFor="deal-description">DESCRIPTION</label>
            <textarea
              className="form-input textarea1"
              rows="6"
              id="deal-description"
              placeholder="Indiquez une description du bon plan"
              value={dealDescription}
              onChange={handleChangeDescription}
              required
            />
          </div>
          <div>
            <label className="form-secondarytitle" htmlFor="deal-link">LIEN DU BON PLAN</label>
            <input
              className="form-input"
              onChange={handleGameUrl}
              value={dealURL}
              type="text"
              id="deal-link"
              placeholder="Lien vers le bon plan en ligne (ou un lien de la boutique physique)"
              required
            />
          </div>
          {(concernAGame) ? '' : (
            <div className="adddeal-info">
              <div className="adddeal-info-title"><label className="form-secondarytitle" htmlFor="deal-discount-price">PRIX REMISÉ</label></div>
              <div className="input-info-deal"><input className="form-input" type="number" id="deal-discount-price" value={discountedPrice} onChange={handleChangeDiscountedPrice} /></div>
              <div className="adddeal-info-title"><label className="form-secondarytitle" htmlFor="deal-shipping-price">FRAIS DE PORT</label></div>
              <div className="input-info-deal"><input className="form-input" type="number" id="deal-shipping-price" value={shippingPrice} onChange={handleChangeShippingPrice} /></div>
            </div>
          )}
          <div>
            <label className="form-secondarytitle" htmlFor="deal-vendor">VENDEUR</label>
            <select required className="form-input" id="deal-vendor" value={dealVendor} onChange={handleChangeVendor}>
              <option disabled value="">---Choisissez un vendeur---</option>
              {shopList.map((shop) => {
                if(shop.id === 22){
                  return
                }else{
                return(<option key={shop.id} value={shop.id}>{shop.name}</option>)}
              })}
              <option value="22">Autre boutique</option>
            </select>
          </div>
          <div className="adddeal-secondaryInfo">
            <label className="form-secondarytitle" htmlFor="deal-discount-code">CODE PROMO</label>
            <input className="form-input" type="text" onChange={handleChangeDiscountCode} value={discountCode} id="deal-discount-code" />
            <label className="form-secondarytitle display-none" htmlFor="deal-end">EXPIRE LE<span> (facultatif)</span></label>
            <input className="form-input display-none" type="date" id="deal-end" value={expirationDate} onChange={handleChangeExpirationDate} />
          </div>
          <div className="button_div btn_validate_deal">
            <button className="form-button-validate" type="submit">Envoyer</button>
            <span>{warningMessage}</span>
          </div>
        </form>
        {/* ---------- POPUP D'AJOUT DE JEU ---------- */}
        {isAddGame ? (
          <AddGamePopUp
            SubmitGame={handleSubmitGame}
            ToggleAddGame={handleClickToggleAddGame}
            ChangeGame={handleChangeGame}
            ChangeUrl={handleChangeUrl}
            NewGame={newGame}
            UrlGame={urlGame}
          />
        ) : ''}
        {/* ---------- POPUP DE RECHERCHE ---------- */}
        {isSearchGame ? (
          <SearchGamePopUp
            ToggleSearchGame={handleClickToggleSearchGame}
            gameList={gameList}
          />
        ) : ''}
      </div>
    );
  }
  return (
    <div className="form-section">
      <div className="form-title"><FontAwesomeIcon icon={faTags} /><span className="form-span">Ajouter un bon plan</span></div>
      <div className="deal-comments com-user">
        <p className="need-login-msg">Veuillez vous <span className="need-login-msg-link" aria-label="lien pour se connecter" onClick={handleConnexion}>connecter</span> pour proposer un bon plan</p>
      </div>
    </div>
  );
}
// == Export
export default AddDeal;
