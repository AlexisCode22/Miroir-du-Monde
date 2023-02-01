import image from "../assets/test-image.webp";

function Card() {
  return (
    <div className="card">
      <img alt="photos" src={image} />
      <h1>Visuelle card</h1>
      <p>production : Lepinois Emeric</p>
      <p>director : franck Gastambide</p>
    </div>
  );
}

export default Card;
