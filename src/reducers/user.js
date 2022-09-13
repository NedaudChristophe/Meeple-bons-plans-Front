import {
  TOGGLE_VISIBILITY,    
  LOGOUT,
  CHANGE_FIELD_VALUE_LOGIN_SETTINGS,
  CHANGE_FIELD_VALUE_CREATE_ACCOUNT,
  SAVE_TOKEN,
  SAVE_USER,
  SAVE_IS_LOGGED,
  CLEAR_LOGIN,
  TOGGLE_IS_LOGGED,
  VOTE,
  SET_POPUP_MESSAGE,
} from '../actions/user';

// le initalstate sert a créer un state "vierge" qui sert modifier à chaque itération
const initialState = {
  currentUserPseudo: '', // Pseudo de l'utilisateur Renvoyé par l'API lors de la connexion
  currentUserEmail: '',
  currentUserId: '',
  userAvatar: '', // Avatar de l'utilisateur renvoyé par l'api lors de la connexion
  isUserLogged: false,
  isAvatarVisible: false,
  token: '',
  vote: '',
  popupMessage: '',

  loginSettings: {
    isProfileVisible: false,
    isLoginVisible: false, // est-ce que l'encart de connexion est ouvert ?
    email: '', // pour champs contrôlé email
    password: '', // pour le champs contrôlé du mot de passe
    temporaryMessage: '', // !Temporaire avant API
    // Token ? + Pseudo ?
  },

  createAccount: {
    createPseudo: '',
    createMail: '',
    createPassword: '',
    confirmPassword: '',
    avatarColor: '',
  },
};

// le reducer permet d'affecter a une action(const) une marche a suivre
// le spread operator ...toto sert a deverser les infos ciblé dans toto

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // TOGGLE LA VISIBILITE D'UN ELEMENT
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          [action.field]: !state.loginSettings[action.field],
        },
      };
    case TOGGLE_IS_LOGGED:
    return {
      ...state,
      isUserLogged: !state.isUserLogged,
    };
    case SET_POPUP_MESSAGE:
      return {
        ...state,
        popupMessage: action.message,
      };
    // PERMET DE CHANGER LA VALEUR D'UN CHAMP CONTROLE DANS LE SOUS TABLEAU LOGIN SETTINGS
    case CHANGE_FIELD_VALUE_LOGIN_SETTINGS:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          [action.field]: action.value,
        },
      };
    // PERMET LA DECONNEXION (VIDE DU STATE DONNÉES USER)
    case LOGOUT:
      return {
        ...state,
        token: '',
        isUserLogged: false,
        isAvatarVisible: false,
        currentUserPseudo: '',
        currentUserEmail: '',
        userAvatar: '',
        loginSettings: {
          isLoginVisble: false,
          email: '',
          password: '',
          temporaryMessage: '',
        },
      };
      case CLEAR_LOGIN:
      return {
        ...state,        
        loginSettings: {
          isLoginVisible: true,
          email: '',
          password: '',
          temporaryMessage: action.message,
        },
      };
    // PERMET DE CHANGER LA VALEUR D'UN CHAMP CONTROLE DANS LE SOUS TABLEAU CREATE ACCOUNT
    case CHANGE_FIELD_VALUE_CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          [action.field]: action.value,
        },
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case VOTE:
      return {
        ...state,
        vote: action.value,
        votedDeal: action.dealId,
      };
    case SAVE_USER:
      return {
        ...state,
        [action.placeInState]: action.data,
      };
    case SAVE_IS_LOGGED:
      return {
        ...state,
        isUserLogged: action.isLogged,
      };
    default:
      return state;
  }
}

export default reducer;
