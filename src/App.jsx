import { useState } from "react";
import "./App.css";

function App() {
  const foods = {
    Japan: {
      dish: "Sushi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
      history:
        "Sushi is a traditional Japanese dish made with vinegared rice and fresh fish or vegetables. It has been enjoyed in Japan for centuries.",
      ingredients: [
        "Rice",
        "Nori (seaweed)",
        "Salmon",
        "Cucumber",
        "Soy Sauce",
      ],
    },

    Italy: {
      dish: "Pizza",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
      history:
        "Pizza originated in Naples, Italy, and has become one of the world's most loved foods.",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Pepperoni",
      ],
    },

    Mexico: {
      dish: "Tacos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Tacos_de_carnitas.jpg",
      history:
        "Tacos are a popular Mexican street food that has been enjoyed for generations.",
      ingredients: [
        "Corn Tortillas",
        "Beef",
        "Lettuce",
        "Cheese",
        "Salsa",
      ],
    },
  };

  const [country, setCountry] = useState("Japan");

  return (
    <div className="container">
      <h1>🌍 Flavor Passport</h1>

      <p className="intro">
        Explore different cultures through traditional foods.
      </p>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {Object.keys(foods).map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <div className="card">
        <img
          src={foods[country].image}
          alt={foods[country].dish}
        />

        <h2>{foods[country].dish}</h2>

        <h3>History</h3>
        <p>{foods[country].history}</p>

        <h3>Ingredients</h3>

        <ul>
          {foods[country].ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;