import React, { useState } from "react";
import { Link } from "react-router-dom";

function Connexion() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="connexion">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Connexion</button>
      </form>
      <nav>
        <Link to="/createAccount">
          <button type="button">Create an account</button>
        </Link>
      </nav>
    </section>
  );
}

export default Connexion;
