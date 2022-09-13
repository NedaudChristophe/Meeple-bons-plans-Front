// Désactivation de paramètres ESLINT

/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import des éléments de librairies
import { useDispatch, useSelector } from 'react-redux';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

// == Import des fonctions des actions
import {
  changeFieldValueCreateAccount,
  fetchFromSignIn,
} from '../../actions/user';

// == Import SCSS et autres
import './style.scss';



// == Composant
function SignIn() {
  const dispatch = useDispatch();
  const {
    createPseudo,
    createMail,
    createPassword,
    confirmPassword,
    avatarColor,
  } = useSelector((state) => state.user.createAccount);

  // == HANDLERS
  // possibilité de factoriser d'avantage en ajoutant des sous-composants
  // mais plus pratique à faire soit en début de projet ou soit une fois le CSS fixé définitivement

  const handleCreatePseudo = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createPseudo'));
  };
  const handleCreateEmail = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createMail'));
  };
  const handleCreatePassword = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createPassword'));
  };
  const handleConfirmPassword = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'confirmPassword'));
  };
  const handleAvatarColor = (event) => {
   const selectedValue = event.currentTarget.value;
   console.log('TEEEEEEEEEST');
    if (selectedValue === "0") {
      const randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      console.log('valeur aléatoire d\'avatar: ', randomValue);
      const avatarID = parseInt(randomValue, 10);
      dispatch(changeFieldValueCreateAccount(avatarID, 'avatarColor'));
    }else {
      const avatarID = parseInt(selectedValue, 10);
      dispatch(changeFieldValueCreateAccount(avatarID, 'avatarColor'));
    }
    
  };

  const handleSubmitCreateAccount = (event) => {
    event.preventDefault();
    if(createPassword !== '' && (createPassword === confirmPassword)){
    console.log('handleSubmit');
    // TODO vérification mot de passe identique avec un if
    dispatch(fetchFromSignIn());}
    else {
      alert('Merci de saisir un mot de passe valide et de le confirmer');
    }
  };


  return (
    <div className="form-section">
      <form className="newUser" onSubmit={handleSubmitCreateAccount}>{/*navigate et outlet ?  <outlet /> est un hook permetant de donner acces aux route enfants ???? */}
        <div className="form-title">
          <div className="register-title"><FontAwesomeIcon icon={faAddressCard} /> </div>
          <div className="form-span"> Créer un compte</div>
        </div>
        <div className="register-main">
          {/* ---------- GESTION PSEUDO ET MAIL---------- */}
          <label className="form-secondarytitle" htmlFor="register-title">PSEUDO</label>
          <input className="form-input" onChange={handleCreatePseudo} value={createPseudo} placeholder="Choisir un pseudo" type="text" />
          {/*<span className="form-msg-error">Ce pseudo n'est pas disponible</span>*/}
          <label className="form-secondarytitle" htmlFor="register-mail">E-MAIL</label>
          <input className="form-input" onChange={handleCreateEmail} value={createMail} placeholder="Adresse Mail" type="email" />
          {/*<span className="form-msg-error">{(createMail.value == '@') ? ((createMail.value != '@') ? "L\'adresse mail n'est pas valide")}</span>*/}
          {/* ---------- GESTION MOT DE PASSE ----------- */}
          <label className="form-secondarytitle" htmlFor="register-psw">MOT DE PASSE</label>
          <input className="form-input" type="password" onChange={handleCreatePassword} value={createPassword} placeholder="Mot de passe" />
          <input className="form-input" type="password" onChange={handleConfirmPassword} value={confirmPassword} placeholder="Confirmer le mot de passe" />
          {/* TODO Penser à remplacer la ternaire imbriquée pour quelque chose de plus propre */}
          <span className="form-msg-error">{(createPassword!=='')?((createPassword === confirmPassword) ? 'Bravo, tu as saisi deux fois le même mot de passe ! FELICITATIONS pour cet exploit !!!' : 'Les mots de passe saisis ne sont pas identiques... BOUUUUUH !!!'):'Merci de saisir un mot de passe'}</span>
        </div>
        {/* ---------- GESTION CHOIX COULEUR DE L'AVATAR ----------- */}
        <label className="form-secondarytitle" htmlFor="register-avatar">AVATAR</label>
        <select className="form-input" name="avatars" id="meeple-select" value={avatarColor} onChange={handleAvatarColor}>   
          <option value="" disabled className="choiceWhite choice">--- Choisissez votre couleur ---</option>
          <option value="0"> &#127922; Aléatoire &#x1F3B2;</option>       
          <option value="10"className="choiceWhite choice">Jaune</option>
          <option value="4" className="choice">Orange</option>
          <option value="7" className="choiceWhite choice">Rouge</option>
          <option value="5" className="choice">Rose</option>
          <option value="6" className="choiceWhite choice">Violet</option>
          <option value="2" className="choice">Bleu</option>
          <option value="8" className="choiceWhite choice">Turquoise</option>
          <option value="3" className="choice">Vert</option>
          <option value="1" className="choiceWhite choice">Noir</option>
          <option value="9" className="choice">Blanc</option>
                          
        </select>
        <div className="button-register-div">
          { <button type="submit"  className="form-button-validate SignIn-button">Je m'inscris</button> }
        </div>
      </form>
    </div>

  );
}

// == Export
export default SignIn;
