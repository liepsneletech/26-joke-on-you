function Card({ type, joke, setup, delivery }) {
  return (
    <div className="card">
      <h2> {type === "single" ? joke : setup} </h2>
      {type === "twopart" && <p>{delivery}</p>}
    </div>
  );
}

export default Card;
