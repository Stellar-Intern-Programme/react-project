import susta from "../../assets/image_2022-08-04_135241770-removebg-preview.png"
import poza from "../../assets/fundal-site.jpeg";
import React, { useState } from "react";
import "./head.css";
import ics from "../../assets/x-symbol-svgrepo-com.svg";

export function Head() {
  const [modalOpen, toggleModal] = useState(false);

  return (
    <div className="photoBackground">
      <img src={poza} className="poza-fundal"></img>
      <button className="buttonLoL" onClick={() => toggleModal(true)}>
        INSCRIE-TE ACUM
      </button>

      {modalOpen && (
        <div
          className="fundal"
          onClick={(e) => {
            const clase = [...e.target.classList];
            if (clase.includes("fundal")) {
              toggleModal(false);
            }
          }}
        >
          <div className="modal">
            <img
              src={ics}
              alt=""
              className="ics"
              onClick={(e) => {
                toggleModal(false);
              }}
            />
            <div className="coverConectare">
              <p className="conectare">CONECTARE</p>
            </div>
            <div className="coverIdPass">
                <div className="coverNR2">
                    <input type="text" className="utiliator" placeholder="Utilizator / E-mail"/>
                    <input type="Password" className="parola" placeholder="Parola" />
                </div>
              <div className="conectareBut">
                <button className="ConBut">
                    CONECTARE
                </button>
                <p className="uitat">
                  AI UITAT PAROLA?
                </p>
              </div>
              <div className="over">
                <div className="linie1"></div>
                <p className="textLOL">sau</p>
                <div className="linie2"></div>
              </div>
              <div className="overCreare">
                <button className="creare">
                    CREARE CONT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
