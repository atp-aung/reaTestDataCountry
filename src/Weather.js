import { useState, useEffect } from "react";
import axios from "axios";

const Weather = (p) => {
  const [wthDtl, setWthDtl] = useState("");
  const [city, setCity] = useState("Tokyo");
  const apiKey = "c2973aa415fd05d393e5970b324cd774";

  useEffect(() => {
    console.log("effect two");

    console.log("fetching weather");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        console.log(response);
        setWthDtl(response.data);
      })
      .catch((err) => console.log("err city"));
  }, [city]);

  return (
    <>
      <div>{wthDtl.cod}</div>
      <div>{wthDtl.base}</div>
    </>
  );
};

export default Weather;
