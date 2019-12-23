import React, { useState, useEffect } from "react";
import "./Lights.scss";
import { Light } from "../Light/Light";

export const Lights = props => {
  const [lights, setLights] = useState([
    {
      id: 0,
      isOn: false
    },
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
    }
  ]);
  const { isPlaying, intensity } = props;
  const [lightsInterval, setLightsInterval] = useState(null);
  var actualLightId = 0;

  function handleLights() {
    setLights(
      lights.map(light =>
        light.id === actualLightId ? { ...light, isOn: true } : light
      )
    );
    actualLightId < 6 ? actualLightId++ : (actualLightId = 0);
  }

  useEffect(() => {
    if (isPlaying) {
      setLights(
        lights.map(light =>
          light.id === actualLightId ? { ...light, isOn: true } : light
        )
      );
      setLightsInterval(
        setInterval(handleLights, (10000 - 1000 * intensity) / 100)
      );
    } else {
      setLights(lights.map(light => ({ ...light, isOn: false })));
      setLightsInterval(clearInterval(lightsInterval));
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      setLightsInterval(clearInterval(lightsInterval));
      setLights(lights.map(light => ({ ...light, isOn: false })));
      setLightsInterval(
        setInterval(handleLights, (10000 - 1000 * intensity) / 100)
      );
    }
  }, [intensity]);

  return (
    <div className="lights">
      {lights.map(light => {
        return <Light key={light.id} id={light.id} isOn={light.isOn} />;
      })}
    </div>
  );
};
