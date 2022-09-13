import PropTypesLib from "prop-types";
import "./style.scss";

function ActuCard({ description, image, title }) {
  return (
    
      <div className="contener-card-medium">
        {/*une card actus de taille standard */}

        <article className="card-medium">
          <h2 className="Title-big">{title}</h2>
          <img className="Img-Actu" src={image}></img>
          {/*<time className="date-dig">14/02/2012</time>*/}
          <p className="description-actu-Medium">{description}</p>
        </article>
      </div>
    
  );
}
 {/*L'actu la plus grande 
     <div className="pseudo-body"></div>
      <article className="card-main">
        <h2 className="Title-big">Titre</h2>
        <time className="date-dig">14/02/2012</time>
        <p className="description-actu-big">
          Lorem ipsum dolor sit amet. Aut molestiae et ullam delectus qui iste
          error 33 eligendi culpa et explicabo numquam. Eum incidunt sint qui
          dolores consectetur soluta necessitatibus est voluptatem earum aut
          voluptatem fugit eum cumque dolorem.
          </p>
          </article> */}

      {/*le contener qui contient les actus de taille normal */}
ActuCard.prototype = {
  description: PropTypesLib.string.isRequired,
  title: PropTypesLib.string.isRequired,
  image: PropTypesLib.string.isRequired,
};

export default ActuCard;
