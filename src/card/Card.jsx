import "./Card.css";

const Card = ({ name, lastname }) => {
  return (
    <div className="container">
      <h2>
        Hola {name} {lastname}
      </h2>
      <p>
        Hola Profe, espero que se apiade de mi y me ponga buena calificación.
        Saludos!!!
      </p>
    </div>
  );
};
export default Card;
