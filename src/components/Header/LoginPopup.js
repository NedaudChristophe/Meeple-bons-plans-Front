/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de librairies
import { Link } from 'react-router-dom';

//import des hooks
import { useSelector, useDispatch } from 'react-redux';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



// == Composant
function LoginPopup({
  SubmitLogin,
  ToggleVisibility,
  ChangeField,
  email,
  password,
  temporaryMessage,
}) {
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    ChangeField(event.currentTarget.value, 'email');
  };
  const handleChangePassword = (event) => {
    ChangeField(event.currentTarget.value, 'password');
  };
  const handleToggleLogin = () => {
    ToggleVisibility('isLoginVisible');
  };

 

  return (
    <div className="login-popup">
      <div className="form-popup">
        <form action="#" className="form-container" onSubmit={SubmitLogin}>
          <div id="title_login">Connexion<span><button aria-label="Fermer" type="button" className="cancel" onClick={handleToggleLogin}><FontAwesomeIcon icon={faXmark} /></button></span></div>
          <label htmlFor="email">
            <strong className="subtitle_login">E-mail</strong>
          </label>
          <input type="email" onChange={handleChangeEmail} id="email" placeholder="Votre Email" name="email" value={email} required />
          <label htmlFor="psw">
            <strong className="subtitle_login">Mot de passe</strong>
          </label>
          <input type="password" onChange={handleChangePassword} id="psw" placeholder="Votre Mot de passe" name="psw" value={password} required />
          <div className="login_error">{temporaryMessage}</div>
          <button type="submit" className="btn" onSubmit={SubmitLogin}>Se connecter</button>
          {/* <div className="lost_password">Mot de passe oublié?</div> */}
          <div className="or"> OU </div>
          <Link to="/inscription"><button type="button" className="btn register" onClick={handleToggleLogin}>S'inscrire</button></Link>
        </form>
      </div>
    </div>
  );
}

LoginPopup.propTypes = {
  SubmitLogin: PropTypesLib.func.isRequired,
  ToggleVisibility: PropTypesLib.func.isRequired,
  ChangeField: PropTypesLib.func.isRequired,
  email: PropTypesLib.string,
  password: PropTypesLib.string,
  temporaryMessage: PropTypesLib.string,

};

LoginPopup.defaultProps = {
  email: '',
  password: '',
  temporaryMessage: '',
};

// == Export
export default LoginPopup;
