import { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../assets/menu.svg";
import croix from "../assets/croix.retour.png";
import connexion from "../assets/login.png";

function Header() {
  const [buttonBurger, setButtonBurger] = useState(false);

  return (
    <>
      <header>
        <button type="button" onClick={() => setButtonBurger(!buttonBurger)}>
          {buttonBurger ? (
            <img src={croix} alt="croix" className="croix" />
          ) : (
            <img src={burger} alt="burger" className="burger" />
          )}
        </button>
        <h1>Miroir du monde</h1>
        <Link to="/connexion">
          <button type="button">
            <img src={connexion} alt="connexion" />
          </button>
        </Link>
      </header>

      {buttonBurger && (
        <ul className="filterBurger">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>About</li>
        </ul>
      )}
    </>
  );
}

export default Header;
