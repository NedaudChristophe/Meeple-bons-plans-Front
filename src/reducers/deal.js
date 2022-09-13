import {
  //ajout d'un bon plan
  CHANGE_DEAL_GAME,
  CHANGE_DEAL_TITLE,
  TOGGLE_CONCERN_A_GAME,
  CHANGE_DEAL_DESCRIPTION,
  CHANGE_DEAL_URL,
  CHANGE_DEAL_VENDOR,
  CHANGE_DISCOUNTED_PRICE,
  CHANGE_SHIPPING_PRICE,
  CHANGE_DISCOUNT_CODE,
  CHANGE_EXPIRATION_DATE,
  SAVE_DEAL,
  TOGGLE_ADD_GAME,
  CHANGE_GAME, // POP UP ADD GAME
  CHANGE_URL,
  SAVE_ONE_DEAL,
  ADD_DEAL_SUMIT_FORM,
  SAVE_GAME_LIST,
  ADD_COMMENT,
  SEARCH_GAME_HEADER,
  TOGGLE_SEARCH_GAME,
  SAVE_CHOOSED_GAME,
  CLEAR_STATE_CONCERN_GAME,
  WARNING_MESSAGE,
  SAVE_SHOPS,
  SAVE_NEWS, // POP UP SEARCH GAME
} from '../actions/deal';

// ici on initialise le state
const initialState = {
  activeDeal: '',
  dealList: [],
  userComment: '',
  gameList: [],
  shopList: [],
  newsList: [],
  choosedGame: '',
  warningMessage: '',

  addDealForm: {
    dealTitle: '',
    dealGame: '',
    concernAGame: false,
    dealDescription: '',
    dealURL: '',
    discountedPrice: '',
    shippingPrice: '',
    discountCode: '',
    expirationDate: '',
    dealVendor: '',
    isAddGame: false, // est-ce que l'encart suggérer un jeu est ouvert ?
    newGame: '',
    urlGame: '',
  },

  searchGame: {
    isSearchGame: false, // est-ce que l'encart suggérer un jeu est ouvert ?
    SearchBar: '',
  },
};

// ici on reprends le state inital ( avec state = initialState) et on lui ajoute (en écrasant) des modifications avec un "parametre"
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEAL_TITLE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealTitle: action.title,
        },
      };
    case WARNING_MESSAGE:
      return {
        ...state,
        warningMessage: action.message,
      };
    case CLEAR_STATE_CONCERN_GAME:
      return {
        ...state,
        choosedGame: '',
        addDealForm: {
          ...state.addDealForm,
          shippingPrice: '',
          discountedPrice: '',
          dealGame: '',
        },
      };
    case CHANGE_DEAL_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealGame: action.game,
        },
      };
    case SAVE_CHOOSED_GAME:
      return {
        ...state,
        choosedGame: action.game,
      };
    case TOGGLE_CONCERN_A_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          concernAGame: !state.addDealForm.concernAGame,
        },
      };
    case CHANGE_DEAL_DESCRIPTION:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealDescription: action.description,
        },
      };
    case CHANGE_DEAL_URL:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealURL: action.url,
        },
      };
    case CHANGE_DISCOUNTED_PRICE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          discountedPrice: action.price,
        },
      };
    case CHANGE_SHIPPING_PRICE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          shippingPrice: action.price,
        },
      };
    case CHANGE_DEAL_VENDOR:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealVendor: action.vendor,
        },
      };
    case CHANGE_DISCOUNT_CODE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          discountCode: action.code,
        },
      };
    case CHANGE_EXPIRATION_DATE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          expirationDate: action.date,
        },
      };
    case SAVE_DEAL:
      return {
        ...state,
        dealList: action.deal,
      };
    case CHANGE_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          newGame: action.newGame,
        },
      };
    case CHANGE_URL:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          urlGame: action.urlGame,
        },
      };
    case TOGGLE_ADD_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          isAddGame: !state.addDealForm.isAddGame,
        },
      };
    case SAVE_SHOPS:
      return {
        ...state,
        shopList: action.shopList,
      };
      case SAVE_NEWS:
      return {
        ...state,
        newsList: action.data,
      };
    case SAVE_GAME_LIST:
      return {
        ...state,
        gameList: action.gameList,
      };

      //WIP-------------------------POP UP SEARCH GAME-----------------
      case TOGGLE_SEARCH_GAME:
        return {
          ...state,
          searchGame: {
            ...state.searchGame,
            isSearchGame: !state.searchGame.isSearchGame,
          },
        };

      //Ici on envoie les data du ajouter un bon plan au stat
    case ADD_DEAL_SUMIT_FORM:
      return{
        ...state,
        addDealForm: {
          ...state.addDealForm,
          isAddGame: !state.addDealForm.isAddGame,
        },
      };
    case SAVE_ONE_DEAL:
      return {
        ...state,
        activeDeal: action.oneDeal.deal,
      };
    case ADD_COMMENT:
    return {
      ...state,
      userComment: action.comment,
    };
    //CHAMP CONTROLE DE LA RECHERCHE DANS LE HEADER
    case SEARCH_GAME_HEADER:
      return {
        ...state,
        searchGame:{
          ...state.searchGame,
          SearchBar: action.search,
        },
      };
    default:
      return state;
  }
}
export default reducer;
