import "../style/CreateAccount.scss";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
          password,
          role: "user",
        })
        .then((reponse) => {
          if (reponse.status === 201) {
            navigate("/connexion");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setConfirmPassword("");
      setPassword("");

      // eslint-disable-next-line no-alert
      alert("Erreur dans le mot de passe");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="firstname">Prenom</label>
        <input ref={firstnameRef} id="firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Nom</label>
        <input ref={lastnameRef} id="lastname" type="text" />
      </div>
      <div>
        <label htmlFor="phone">Telephone</label>
        <input ref={phoneRef} id="phone" type="text" />
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input ref={emailRef} id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">password Confirm</label>
        <input
          value={confirmPassword}
          id="passwordConfirm"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Create account</button>
    </form>
  );
}

export default CreateAccount;
