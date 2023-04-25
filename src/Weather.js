import { useState, useEffect } from "react";
import axios from "axios";

const Weather = (p) => {
  const [wthDtl, setWthDtl] = useState("");
  const [city, setCity] = useState(p.getCity);
  const apiKey = "c2973aa415fd05d393e5970b324cd774";
  console.log(p.getCity);

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
      <div>temp: {wthDtl.main?.temp}</div>
      <div>City: {wthDtl.name}</div>
    </>
  );
};

export default Weather;
