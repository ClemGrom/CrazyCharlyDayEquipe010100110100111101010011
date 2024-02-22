"use client";

import React from "react";
import styles from "./styles.module.css";

export default function FormPage() {
  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    console.log({ lastName, firstName, email });
  }

  return (
    <div>
      <h1 className={styles.title}>Veuillez saisir vos informations :</h1>
      <form className={styles.form}>
        <fieldset>
          <legend>Formulation des voeux</legend>
          <div>
            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="email">Adresse mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit" onClick={submit}>Envoyer</button>
        </fieldset>
      </form>
      { }
    </div>
  );
}
