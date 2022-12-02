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
      <ul className="container">
        {cards?.map((c, i) => {
          return <Card key={i} {...c} />;
        })}
      </ul>
    </div>
  );
}

export default App;
