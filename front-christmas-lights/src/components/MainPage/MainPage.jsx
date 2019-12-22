import React, { useState } from "react";
import { Lights } from "../Lights/Lights";
import "./MainPage.scss";

export const MainPage = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [intensity, setIntensity] = useState(5);
  return (
    <>
      <main className="main">
        <Lights isPlaying={isDisplayed} />
        <section className="main-settings">
          <div className="main-settings-intensity">
            <p>Intensity: {intensity}</p>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={intensity}
              onChange={e => {
                setIntensity(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              isDisplayed ? setIsDisplayed(false) : setIsDisplayed(true);
            }}
          >
            {isDisplayed ? "Turn off" : "Turn on"}
          </button>
        </section>
      </main>
    </>
  );
};
