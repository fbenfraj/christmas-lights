import React, { useState, useEffect } from "react";
import "./Light.scss";

export const Light = props => {
  const [isOn, setIsOn] = useState(props.isOn);

  useEffect(() => {
    setIsOn(props.isOn);
  }, [props.isOn]);

  return <div className={"light " + (isOn ? "on" : "off")} />;
};
