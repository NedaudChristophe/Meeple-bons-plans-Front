// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

// == Composant
function LegalMentions() {
  return (
    <div className="legal-mentions-page">
      <div className="doc-title"><FontAwesomeIcon icon={faFileLines} className="icon" />  Mentions Légales</div>
      
      <div className="doc-secondarytitle">IDENTITÉ</div>
      <p>
        <ul>
          <li>Nom du site web : MEEPLE BONS PLANS</li>
          Adresse : https://meeplebonsplans.fr/
          <li>Propriétaire : Lorem Ipsum</li>
          <li>Responsable de publication : Lorem Ipsum</li>
          <li>Adresse : Lorem Ipsum</li>
          <li>Contact : contact@meeplebonsplans.fr</li>
          <li>Conception et réalisation : L'équipe MEEPLE</li>
          <li>SIRET : 5*9*8*8*8*8*8*8*</li>
          <li>Hébergement : Lorem Impsum</li>
        </ul>
      </p>
      <br />

      <div className="doc-secondarytitle">CONDITIONS D’UTILISATION</div>
        <p>
      L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. 
Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
       </p>
      <br />

      <div className="doc-secondarytitle">INFORMATIONS</div>
      <p>
      Les informations et documents du site sont présentés à titre indicatif, n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.

Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.
      </p>

      <br />
      <div className="doc-secondarytitle">INTERACTIVITÉ</div>
      <p>
      Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaires). Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.

Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par les utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.
      </p>

      <br />
      <div className="doc-secondarytitle">PROPRIÉTÉ INTELLECTUELLE</div>
      <p>
      Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage. 1

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.23

Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et poursuivie. 4

Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
      </p>

      <br />
      <div className="doc-secondarytitle">LIENS</div>
      <p>
      Liens sortants Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.

Liens entrants Le propriétaire du site autorise les liens hypertextes vers l’une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d’éviter :

tout risque de confusion entre le site citant et le propriétaire du site ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur. Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime que le site source ne respecte pas les règles ainsi définies.
      </p>

      <br />
      <div className="doc-secondarytitle">CONFIDENTIALITÉ</div>
      <p>
      Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité. 5678

Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL. 9
      </p>

    </div>
  );
}

// == Export
export default LegalMentions;
