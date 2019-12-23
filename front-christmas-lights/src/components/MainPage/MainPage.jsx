import React, { useState } from "react";
import { Lights } from "../Lights/Lights";
import "./MainPage.scss";

export const MainPage = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [intensity, setIntensity] = useState(4);

  return (
    <>
      <main className="main">
        <section className="main-lights">
          <h1 style={{ textAlign: "center", margin: 0 }}>Christmas Lights</h1>
          <Lights isPlaying={isDisplayed} intensity={intensity} />
        </section>
        <section className="main-settings">
          <button
            onClick={() => {
              isDisplayed ? setIsDisplayed(false) : setIsDisplayed(true);
            }}
          >
            {isDisplayed ? "Turn off" : "Turn on"}
          </button>
          {!isDisplayed && (
            <div className="main-settings-intensity">
              <p>Intensity: {intensity}</p>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={intensity}
                onChange={e => {
                  setIntensity(e.target.value);
                }}
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
};
