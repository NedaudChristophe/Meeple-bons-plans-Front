// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { NavLink } from 'react-router-dom';

// == Composant
function Footer() {
  return (
    <footer>
      <div className="footnav">
        {/* <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/contact">Contact</NavLink> */}
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/cgu">CGU</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/mentions-legales">Mentions légales</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/team">L'équipe</NavLink>
      </div>
    </footer>
  );
}

// == Export
export default Footer;
