// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

// == Composant
function CGU() {
  return (
    <div className="cgu-page">
      <div className="doc-title"><FontAwesomeIcon icon={faFileContract} className="icon" />  Conditions générales d'utilisation</div>
      <div className="doc-secondarytitle">PROPRIÉTÉ INTELLECTUELLE</div>
      <p>Tout contenu publié et mis à disposition sur ce site est la propriété de MEEEPLE BONS PLANS et de ses créateurs. Cela comprend, mais n'est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la composition du site.
      </p>
      <br />

      <div className="doc-secondarytitle">CONTRIBUTIONS D'UTILISATEURS</div>
      <p>Les utilisateurs peuvent publier les informations suivantes sur notre site :
        <ul>
          <li>Des bons plans</li>
          <li>Des commentaires sur les bons plans</li>
        </ul>
        En affichant publiquement sur notre site, vous acceptez de ne pas agir illégalement ou violer les conditions d'utilisation acceptable émunérées dans ce document.
      </p>
      <br />

      <div className="doc-secondarytitle">COMPTES</div>
      <p>Lorsque vous créez un compte sur notre site, vous acceptez ce qui suit:
        <ul>
          <li>que vous êtes seul responsable de votre compte et de la sécurité et la confidentialité de votre compte, y compris les mots de passe ou les renseignements de nature délicate joints à ce compte, et</li>
          <li>que tous les renseignements personnels que vous nous fournissez par l'entremise de votre compte sont à jour, exacts et véridiques et que vous mettrez à jour vos renseignements personnels s'ils changent.</li>
        </ul>
        Nous nous réservons le droit de suspendre ou de résilier votre compte si vous utilisez notre site illègalement ou si vous violez les conditions d'utilisation acceptable.
      </p>
      <br />

      <div className="doc-secondarytitle">LIMITATION DE RESPONSABILITÉ</div>
      <p>MEEPLE BONS PLANS ou l'un de ses créateurs sera tenu responsable de tout problème découlant de ce site. Néanmoins MEEPLE BONS PLANS et ses créateurs ne seront pas tenus responsables de tout problème découlant de toute utilisation irrégulière de ce site.
       
      </p>
      <br />
  

    </div>
  );
}

// == Export
export default CGU;
