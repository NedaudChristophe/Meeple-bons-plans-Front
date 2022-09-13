// Désactivation de paramètres ESLINT

/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import des éléments de librairies
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown, faXmark,
} from '@fortawesome/free-solid-svg-icons';

// == Import des fonctions des actions
import {
  toggleVisibility,
  fetchLogin,
  disconnect,
  changeFieldValueLoginSettings,
  setPopupMessage,

} from '../../actions/user';

import {
  searchGameNav,
} from '../../actions/deal';

// == Import de composants
import LoginPopup from './LoginPopup';
import ProfilePopup from './ProfilePopup';

// == Import d'images, SCSS et autres
import './style.scss';
import logo from '../../assets/img/logo-meeple.svg';


// == Composant
function Header() {
  // TODO les parties dynamiques des URLs sont entrées en dur ICI
  // à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne ! (à voir quand API)
  const categoryJDS = 'jeux-de-societe';
  const categoryJDR = 'jeux-de-roles';
  const categoryJDF = 'jeux-de-figurines';

  // Récupération des données du state qu'on utilise ici pour gérer le formulaire de connexion:
  const {
    isLoginVisible,
    email,
    password,
    temporaryMessage,
    isProfileVisible,

  } = useSelector((state) => state.user.loginSettings);

  // Ici on vient extraire/récupérer les données situées dans le state avec useSelector
  const {
    isUserLogged,
    currentUserPseudo,
    userAvatar,
    popupMessage,
  } = useSelector((state) => state.user);
  const dealObjectTest = useSelector((state) => state.deal.dealList);

  console.log('CONSOLE LOG sur header', dealObjectTest.value);
  // Récupération du fact chuck norris d'essai pour l'appel API
  const dealObjectTest2 = dealObjectTest.value;


  // permet d'envoyer des données au state (avec les actions et reducer)
  // (useSelector = 'pull' du state (redux) // useDispatch = 'push_vers_state' // useEffect = permet de determiner une fonction a executer a un moment choisi)
  // (usestate = sans redux? )
  const dispatch = useDispatch();

  //! temporaire avant API:
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(fetchLogin(email, password));
  };

  // Handlers :
  /* ------------ HANDLERS SINGLE USE AFFICHAGE DES POPUPS ------------ */
  /**
   * Function that toggle the login popup
   */
  const handleClickToggleLogin = () => {
    dispatch(toggleVisibility("isLoginVisible"));
  };
  /**
   * Function that toggle the profile popup
   */
  const handleToggleProfile = () => {
    dispatch(toggleVisibility("isProfileVisible"));
  };

  /**
   * Handler for logout (disconnect)
   */
   const handleDisconnect = () => {
    
    dispatch(disconnect());
    dispatch(setPopupMessage('Déconnexion en cours ... veuillez patienter ...'));
    setTimeout(() => {
      dispatch(setPopupMessage(''))
    }, 3800);
    window.localStorage.clear();
    window.location.reload(); 
    
  };

  // Dispatch champs controlé search
  const handleInputSearch = (event) => {
    const searchedGameHeader = event.currentTarget.value;
    dispatch(searchGameNav(searchedGameHeader));
  };

  /* ---------- HANDLER GENERAUX AVEC PLUSIEURS UTILITES ---------- */
  /**
   * Ajout d'une donnée dans le state (idéal pour champ contôlé)
   * @param value chaine de caractère à dispatch dans le state
   * @param field string exact correspondant au nom de l'entrée dans le state à modifier
   */
  const handleChangeFieldValue = (value, field) => {
    dispatch(changeFieldValueLoginSettings(value, field));
  }
   /**
   * Toggle une valeur dans le state à son contraire
   * @param field string exact correspondant au nom de l'entrée dans le state à modifier
   */
  const handleToggleVisibility = (field) => {
    dispatch(toggleVisibility(field));
  }

  return (
    <header>
      {/* ---------- LOGO TITRE ET BOUTONS AJOUT ET CONNEXION ---------- */}
      <div id="head-logo">
        <div id="left-header">
          <Link to="/">
            <img src={logo} className="logotype" alt="Logo Meeple Bons Plans" />
          </Link>
          <Link to="/">
            <div className="header__title">MEEPLE BONS PLANS</div>
          </Link>
        </div>
        <div id="right-header">
          <div className="search">
            <input type="search" className="search-bar" name="q" placeholder="Rechercher" onChange={handleInputSearch}/>
          </div>
          <Link to="/ajouter-bon-plan" id="add-deal"><FontAwesomeIcon icon={faPlus} /><span className="displaybutton"> Ajouter un bon plan</span></Link>
          {isUserLogged ? <button type="button" onClick={handleToggleProfile} id="button-avatar"><img src={userAvatar} alt="profil meeple" id="avatar" className="avatar-effect" /></button> : <button type="button" id="login" onClick={handleClickToggleLogin}><FontAwesomeIcon icon={faUser} /><span className="displaybutton"> Connexion</span></button> }
        </div>
      </div>
      {/* ----------  NAVIGATION DANS HEADER---------- */}
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="dropdown">
            <button type="button" className="dropbtn"><span>Bons Plans </span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content animate">
              <Link to="/bons-plans">Tous les bons plans</Link>
              <Link to={`/bons-plans/${categoryJDS}`}><FontAwesomeIcon icon={faChess} /> Jeux de société</Link>
              <Link to={`/bons-plans/${categoryJDF}`}><FontAwesomeIcon icon={faShieldHalved} /> Jeux de figurines</Link>
              <Link to={`/bons-plans/${categoryJDR}`}><FontAwesomeIcon icon={faDiceD20} />  Jeux de rôle</Link>
            </div>
          </div>
          <NavLink to="/Actus"><FontAwesomeIcon icon={faNewspaper} /><span className="nav-link"> Actualité</span></NavLink>
          <NavLink to="/Boutiques"> <FontAwesomeIcon icon={faShop} /><span className="nav-link"> Boutiques</span></NavLink>
        </div>
      </nav>
      {/* ---------- POPUP DE CONNEXION ---------- */}
      {isLoginVisible ? (
        <LoginPopup
          SubmitLogin={handleSubmitLogin}
          ToggleVisibility={handleToggleVisibility}
          ChangeField={handleChangeFieldValue}
          email={email}
          password={password}
          temporaryMessage={temporaryMessage}
        />
      ) : ''}
      {/* ---------- POPUP DU PROFIL ---------- */}
      {isProfileVisible ? ( 
        <ProfilePopup
          ToggleVisibility={handleToggleVisibility}
          avatar={userAvatar}
          username={currentUserPseudo}
          Disconnect={handleDisconnect}
         />
      ) : ''}
       {/* ---------- POPUP GENERIQUE ---------- */}
      <div className={(popupMessage === '') ? "popupgen-none" : "popupgen"}>{popupMessage}
      </div>
    </header>
  );
}

// == Export
export default Header;
