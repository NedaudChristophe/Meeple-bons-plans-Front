/* la liste des actions a gerer
- le nom du bon plan => dealTitle,
*/
export const CHANGE_DEAL_TITLE = 'CHANGE_DEAL_TITLE';

export function changeDealTitle(newTitle) {
  return {
    type: CHANGE_DEAL_TITLE,
    title: newTitle,
  };
}

/*
- le jeu => dealGame,
*/
export const CHANGE_DEAL_GAME = 'CHANGE_DEAL_GAME';

export function changeDealGame(newGame) {
  return {
    type: CHANGE_DEAL_GAME,
    game: newGame,
  };
}
/*
- le prix remisé => discountedPrice,
*/
export const CHANGE_DISCOUNTED_PRICE = 'CHANGE_DISCOUNTED_PRICE';

export function changeDiscountedPrice(newDiscountedPrice) {
  return {
    type: CHANGE_DISCOUNTED_PRICE,
    price: newDiscountedPrice,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_DEAL_DESCRIPTION = 'CHANGE_DEAL_DESCRIPTION';

// Action creator => On l'utilise au moment du dispatch()
export function changeDealDescription(newDescription) {
  return {
    type: CHANGE_DEAL_DESCRIPTION,
    description: newDescription,
  };
}

/*
- est-ce que le deal concerne un jeu en particulier => concernAGame
*/
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const TOGGLE_CONCERN_A_GAME = 'TOGGLE_CONCERN_A_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function toggleConcernAGame() {
  return {
    type: TOGGLE_CONCERN_A_GAME,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_SHIPPING_PRICE = 'CHANGE_SHIPPING_PRICE';

// Action creator => On l'utilise au moment du dispatch()
export function changeShippingPrice(newShippingPrice) {
  return {
    type: CHANGE_SHIPPING_PRICE,
    price: newShippingPrice,
  };
}

/*
- La boutique => dealVendor,
*/

export const CHANGE_DEAL_VENDOR = 'CHANGE_DEAL_VENDOR';

export function changeVendor(newVendor) {
  return {
    type: CHANGE_DEAL_VENDOR,
    vendor: newVendor,
  };
}

/*
- le lien du bon plan => dealURL,
*/
export const CHANGE_DEAL_URL = 'CHANGE_DEAL_URL';

export function changeDealUrl(newGameUrl) {
  return {
    type: CHANGE_DEAL_URL,
    url: newGameUrl,
  };
}

/*
- la date de fin de promo => expirationDate,
- La boutique => dealVendor,
- le lien du bon plan => dealURL,
- Code promo => discountCode,
*/
export const CHANGE_DISCOUNT_CODE = 'CHANGE_DISCOUNT_CODE';

export function changediscountcode(newDiscountedCode) {
  return {
    type: CHANGE_DISCOUNT_CODE,
    code: newDiscountedCode,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_EXPIRATION_DATE = 'CHANGE_EXPIRATION_DATE';

// Action creator => On l'utilise au moment du dispatch()
export function changeExpDate(newExpDate) {
  return {
    type: CHANGE_EXPIRATION_DATE,
    date: newExpDate,
  };
}
// TODO AJOUT DU JEU POP UP
export const TOGGLE_ADD_GAME = 'TOGGLE_ADD_GAME';

export function ToggleAddGame() {
  return {
    type: TOGGLE_ADD_GAME,
  };
}

export const CHANGE_GAME = 'CHANGE_GAME';
export function OnChangeGame(inputAddGame) {
  return {
    type: CHANGE_GAME,
    newGame: inputAddGame,
  };
}

export const CHANGE_URL = 'CHANGE_URL';
export function OnChangeUrl(inputUrlGame) {
  return {
    type: CHANGE_URL,
    urlGame: inputUrlGame,
  };
}




// ---------------------- sert a changer de page apres la soumission du form

export const ADD_DEAL_SUMIT_FORM = 'ADD_DEAL_SUMIT_FORM';

export function fetchFromAddDeal() {
  return {
    type: ADD_DEAL_SUMIT_FORM,
  };
}

// TODO SEARCH RESULT POP UP
export const TOGGLE_SEARCH_GAME = 'TOGGLE_SEARCH_GAME';

export function ToggleSearchGame() {
  return {
    type: TOGGLE_SEARCH_GAME,
  };
}

//! -------------------ACTION POUR MIDDLEWARES ---------------------------------------

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_DEAL = 'FETCH_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchDeal() {
  return {
    type: FETCH_DEAL,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_DEAL = 'SAVE_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function saveDeal(newDealList) {
  return {
    type: SAVE_DEAL,
    deal: newDealList,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_ONE_DEAL = 'FETCH_ONE_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchOneDeal(dealId) {
  return {
    type: FETCH_ONE_DEAL,
    dealId,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_ONE_DEAL = 'SAVE_ONE_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function saveOneDeal(oneDeal) {
  return {
    type: SAVE_ONE_DEAL,
    oneDeal,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SEARCH_GAME_HEADER = 'SEARCH_GAME_HEADER';

//Action pour le champs controlé search
// Action creator => On l'utilise au moment du dispatch()
export function searchGameNav(searchedGameHeader) {
  return {
    type: SEARCH_GAME_HEADER,
    search: searchedGameHeader,
  };
  console.log('cest a moi que tu parles ?');
}

export const SEARCH_GAME = 'SEARCH_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function searchGame(searchedGame) {
  return {
    type: SEARCH_GAME,
    searchedGame,
  };
 
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const ADD_COMMENT = 'ADD_COMMENT';

// Action creator => On l'utilise au moment du dispatch()
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_COMMENT = 'SAVE_COMMENT';

// Action creator => On l'utilise au moment du dispatch()
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    comment,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_GAME_LIST = 'SAVE_GAME_LIST';

// Action creator => On l'utilise au moment du dispatch()
export function saveGameData(gameList) {
  return {
    type: SAVE_GAME_LIST,
    gameList,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_CHOOSED_GAME = 'SAVE_CHOOSED_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function saveChoosedGame(game) {
  return {
    type: SAVE_CHOOSED_GAME,
    game,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CLEAR_STATE_CONCERN_GAME = 'CLEAR_STATE_CONCERN_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function clearConcernAGameFields() {
  return {
    type: CLEAR_STATE_CONCERN_GAME,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const WARNING_MESSAGE = 'WARNING_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function changeWarningMessage(message) {
  return {
    type: WARNING_MESSAGE,
    message,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_SHOPS = 'FETCH_SHOPS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchShops(shops) {
  return {
    type: FETCH_SHOPS,
    shops,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_SHOPS = 'SAVE_SHOPS';

// Action creator => On l'utilise au moment du dispatch()
export function saveShops(shopList) {
  return {
    type: SAVE_SHOPS,
    shopList,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const NEW_GAME = 'NEW_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function addNewGame() {
  return {
    type: NEW_GAME,    
  };
}

// Reception des acticles (actus)
export const FETCH_NEWS = 'FETCH_NEWS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchNews() {
  return {
    type: FETCH_NEWS,    
  };
}
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_NEWS = 'SAVE_NEWS';

// Action creator => On l'utilise au moment du dispatch()
export function saveNews(data) {
  return {
    type: SAVE_NEWS,
    data,
  };
}
