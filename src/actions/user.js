// TODO IMPORT TEMPORAIRE LE TEMPS DE VERIFIER LES DONNES DE CONNEXION SANS API
// ! A supprimer après :

// On creer une action seulement pour le dispatch pas besoin pour le useSelector

/*--------------------------------------------------------------------------------*/
/* ---------- ACTIONS GENERALES AVEC PLUSIEURS UTILISATIONS POSSIBLES ----------- */
/*--------------------------------------------------------------------------------*/

// le useDispatch (dispatch) envoit a l'action l'info qui elle même transporte les infos au reducer

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
/**
 * @param {string} field nom de l'entrée du state à modifier
 * @returns
 */
export function toggleVisibility(field) {
  return {
    type: TOGGLE_VISIBILITY,
    field,
  };
}

export const CHANGE_FIELD_VALUE_LOGIN_SETTINGS = 'CHANGE_FIELD_VALUE_LOGIN_SETTINGS';
/**
 * Permet de changer une valeur dans le state dans le sous tableau LoginSettings
 * @param {string} value nouvelle valeur à inscrire
 * @param {string} field nom de l'entrée à modifier dans le state
 * @returns
 */
export function changeFieldValueLoginSettings(value, field) {
  return {
    type: CHANGE_FIELD_VALUE_LOGIN_SETTINGS,
    value: value,
    field: field,
  };
}

export const CHANGE_FIELD_VALUE_CREATE_ACCOUNT = 'CHANGE_FIELD_VALUE_CREATE_ACCOUNT';
/**
 * Permet de changer une valeur dans le state dans le sous tableauCreateAccount
 * @param {string} value nouvelle valeur à inscrire
 * @param {string} field nom de l'entrée à modifier dans le state
 * @returns
 */
export function changeFieldValueCreateAccount(value, field) {
  return {
    type: CHANGE_FIELD_VALUE_CREATE_ACCOUNT,
    value: value,
    field: field,
  };
}

/*--------------------------------------------------------------------------------*/
/* ------------ ACTIONS RELATIVES A LA CONNEXION / DECONNEXION------------------- */
/*--------------------------------------------------------------------------------*/

export const LOGOUT = 'LOGOUT';
/**
 * Vide le state des informations de connexion de l'utilisateur, utilisé pour la déconnexion.
 * @returns
 */
export function disconnect() {
  return {
    type: LOGOUT,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CLEAR_LOGIN = 'CLEAR_LOGIN';

// Action creator => On l'utilise au moment du dispatch()
/**
 * Vide les deux champs controlés du popup de connexion
 * Accepte un paramètre optionnel qui correspond au message temporaire dans l'encorat de connexion
 */
export function clearLogin(temporaryMessage = '') {
  return {
    type: CLEAR_LOGIN,
    message: temporaryMessage,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_FORM_SIGNIN = 'FETCH_FORM_SIGNIN';

// Action creator => On l'utilise au moment du dispatch()
export function fetchFromSignIn() {
  return {
    type: FETCH_FORM_SIGNIN,
  };
}

// Ici on defini la l'action click sur le button 'se connecter' pour envoyer les champs a la bdd
// export const SEND_DATA_USER = 'SEND_DATA_USER';

/* export function sendUser() {
  return (
    type: SEND_DATA_USER;
    name: createPseudo,
    email: createMail,
    password: createPassword,
    avatar: avatarColor,
  )
} */

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_LOGIN = 'FETCH_LOGIN';

// Action creator => On l'utilise au moment du dispatch()
export function fetchLogin() {
  return {
    type: FETCH_LOGIN,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_TOKEN = 'SAVE_TOKEN';

// Action creator => On l'utilise au moment du dispatch()
export function SaveTokenInState(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_EMAIL = 'SAVE_EMAIL';

// Action creator => On l'utilise au moment du dispatch()
export function saveEmailInState(email) {
  return {
    type: SAVE_EMAIL,
    email,
  };
}
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED';

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_IS_LOGGED = 'SAVE_IS_LOGGED';

// Action creator => On l'utilise au moment du dispatch()
export function saveIsLogged(isLogged) {
  return {
    type: SAVE_IS_LOGGED,
    isLogged,
  };
}

// Action creator => On l'utilise au moment du dispatch()
export function toggleIsLogged() {
  return {
    type: TOGGLE_IS_LOGGED,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_USER_WITH_MAIL = 'FETCH_USER_WITH_MAIL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchUserWithMail() {
  return {
    type: FETCH_USER_WITH_MAIL,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_USER = 'SAVE_USER';

// Action creator => On l'utilise au moment du dispatch()
export function saveUser(data, placeInState) {
  return {
    type: SAVE_USER,
    data,
    placeInState,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const VOTE = 'VOTE';

// Action creator => On l'utilise au moment du dispatch()
export function vote(value, dealId) {
  return {
    type: VOTE,
    value,
    dealId,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const DISPLAY_POPUP = 'DISPLAY_POPUP';

// Action creator => On l'utilise au moment du dispatch()
export function displayPopup(message) {
  return {
    type: DISPLAY_POPUP,
    message,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_POPUP_MESSAGE = 'SET_POPUP_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function setPopupMessage(message) {
  return {
    type: SET_POPUP_MESSAGE,
    message,
  };
}





