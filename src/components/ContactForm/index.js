/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// == Composant
function ContactForm() {
  return (
    <div className="form-section">
      <div className="form-title"><FontAwesomeIcon icon={faEnvelope} /> <div className="form-span"> Contact</div></div>
      <label className="form-secondarytitle" htmlFor="nom-contact">Nom d'utilisateur</label>
      <input className="form-input" placeholder="Votre nom ou pseudo sur le site" type="text" />
      <span className="form-msg-error">Merci de remplir ce champ</span>
      <label className="form-secondarytitle" htmlFor="mail-contact">Adresse Mail</label>
      <input className="form-input" id="mail-contact" placeholder="Adresse Mail" type="text" />
      <span className="form-msg-error">L'adresse mail n'est pas valide</span>
      <label className="form-secondarytitle" htmlFor="titre-contact">Titre du message</label>
      <input className="form-input" placeholder="Titre du message" type="text" />
      <label className="form-secondarytitle" htmlFor="message-contact">Message</label>
      <textarea
        rows="6"
        className="form-input textarea1"
        placeholder="Saisissez votre message ici"
      />
      <button type="button" className="form-button-validate">Envoyer</button>
    </div>
  );
}

// == Export
export default ContactForm;
