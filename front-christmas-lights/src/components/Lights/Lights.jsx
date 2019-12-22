import React, { useState, useEffect } from "react";
import "./Lights.scss";
import { Light } from "../Light/Light";

export const Lights = props => {
  const [lights, setLights] = useState([
    {
      id: 1,
      isOn: false
    },
    {
      id: 2,
      isOn: false
    },
    {
      id: 3,
      isOn: false
    },
    {
      id: 4,
      isOn: false
    },
    {
      id: 5,
      isOn: false
    },
    {
      id: 6,
      isOn: false
    },
    {
      id: 7,
      isOn: false
    }
  ]);
  const { isPlaying } = props;
  const [lightsInterval, setLightsInterval] = useState(null);

  function handleLights() {
    setLights(
      lights.map(light => (light.id === 1 ? { ...light, isOn: true } : light))
    );
  }
  useEffect(() => {
    isPlaying
      ? setLightsInterval(setInterval(handleLights, 1000))
      : setLightsInterval(clearInterval(lightsInterval));
  }, [isPlaying]);

  return (
    <div className="lights">
      {lights.map(light => {
        return <Light key={light.id} id={light.id} isOn={light.isOn} />;
      })}
    </div>
  );
};
