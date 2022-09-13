// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import image error 404
import err1 from '../../assets/img/404-001.png';
import err2 from '../../assets/img/404-002.png';
import err3 from '../../assets/img/404-003.png';
import errorResponsive from '../../assets/img/404-img.png';

// == Composant
function Error() {
  return (
    <div className="error">
      <div className="cards404">
        <div className="card404-1">
          <img src={err1} alt="erreur 404" id="404-error" />
        </div>
        <div className="card404-2">
          <img src={err2} alt="erreur 404" id="404-error" />
        </div>
        <div className="card404-3">
          <img src={err3} alt="erreur 404" id="404-error" />
        </div>
      </div>
      <div className="responsive404"><img src={errorResponsive} alt="erreur 404" id="404-error" /></div>
      <p className="errormsg">Oops! Tu vas devoir passer ton tour… </p>  
    </div>
  );
}

// == Export
export default Error;
