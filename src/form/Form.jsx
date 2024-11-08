import { useState } from "react";
import "./Form.css";
import {
  validate3CharactersMinimum,
  validate6CharactersMinimum,
} from "./Form.js";
import Card from "../card/Card.jsx";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
  });

  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      validate3CharactersMinimum(formData.name) &&
      validate6CharactersMinimum(formData.lastname)
    ) {
      setError(false);
      setShowCard(true);
    } else {
      setError(true);
      setShowCard(false);
    }

    console.log(formData);
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit} >
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          ></input>

          <label htmlFor="lastname">Last Name</label>
          <input
            autoComplete="off"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your last name"
            onChange={handleChange}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
      {error ? (
        <div className="error">
          Por favor chequea que la información sea correcta.
        </div>
      ) : (
        ""
      )}

      {showCard ? <Card name={formData.name} lastname={formData.lastname}/> : ""}
    </>
  );
};
export default Form;
