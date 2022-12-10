import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import Card from "./Components/Card";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then((data) => setCards(data.jokes));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">
          Jokes on you <i class="fa-regular fa-face-laugh-beam"></i>
        </h1>
        <div className="cards-box">
          {cards?.map((c, i) => {
            return <Card key={i} {...c} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
