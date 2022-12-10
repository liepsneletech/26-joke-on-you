function Card({ type, joke, setup, delivery }) {
  return (
    <div className="card">
      <p className="joke-text joke-part-1">
        {" "}
        {type === "single" ? joke : setup}{" "}
      </p>
      {type === "twopart" && <p className="joke-text">{delivery}</p>}
    </div>
  );
}

export default Card;
