// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

// import photos équipe
import julien from '../../assets/img/julien.jpg';
import chris from '../../assets/img/chris.jpeg';
import camille from '../../assets/img/cam.jpeg';
import claire from '../../assets/img/claire.jpeg';
import laurent from '../../assets/img/lolo.jpeg';

// == Composant
function Team() {
  return (
    <div className="team-page">
      <div className="title-team"><FontAwesomeIcon icon={faPeopleGroup} /> <div className="form-span"> L'ÉQUIPE</div></div>
      <div className="team">
        <div className="cards">
          <div className="card-div">
            <section className="card">
              <div className="card__side card__side--front">
                <img src={julien} alt="profil team" id="card-ava" />
                <p>Julien</p>
              </div>
              <div className="card__side card__side--back">
                <p>Dev Front</p>
                <p>&#11201;</p>
                <p>Product Owner</p>
              </div>
            </section>
          </div>

          <div className="card-div">
            <section className="card">
              <div className="card__side card__side--front">
                <img src={laurent} alt="profil team" id="card-ava" />               
                <p>Laurent</p>
              </div>

              <div className="card__side card__side--back">
                <p>Dev Front</p>
                <p>&#11201;</p>
                <p>Scrum Master</p>
              </div>
            </section>
          </div>

          <div className="card-div">
            <section className="card">
              <div className="card__side card__side--front">
                <img src={claire} alt="profil team" id="card-ava" />
                <p>Claire</p>
              </div>
              <div className="card__side card__side--back">
                <p>Dev Front</p>
                <p>&#11201;</p>
                <p>Lead Front</p>
              </div>
            </section>
          </div>

          <div className="card-div">
            <section className="card">
              <div className="card__side card__side--front">
                <img src={camille} alt="profil team" id="card-ava" />
                <p>Camille</p>
              </div>
              <div className="card__side card__side--back">
                <p>Dev Back</p>
                <p>&#11201;</p>
                <p>Lead Back</p>
              </div>
            </section>
          </div>
          <div className="card-div">
            <section className="card">
              <div className="card__side card__side--front">
                <img src={chris} alt="profil team" id="card-ava" />
                <p>Christophe</p>
              </div>
              <div className="card__side card__side--back">
                <p> Dev Back</p>
                <p>&#11201;</p>
                <p>Git Master</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
}

// == Export
export default Team;
