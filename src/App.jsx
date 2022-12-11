import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Components/Card";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(
    () => {
      fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
        .then((res) => res.json())
        .then((data) => {
          setIsLoaded(true);
          setCards(data.jokes);
        });
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    },
    []
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <div className="container">
          <h1 className="main-title">Jokes on you</h1>
          <div className="cards-box">
            {cards?.map((c, i) => {
              return <Card key={i} {...c} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
