import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [filBox, setFilBox] = useState("");
  const [counName, setCounName] = useState([]);

  useEffect(() => {
    console.log("effect starts run");

    if (filBox) {
      console.log("fetching nations...");
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((response) => {
          console.log(response);
          setCounName(response.data);
        })
        .catch((err) => console.log("erro"));
    }
  }, [filBox]);

  const handFiltChg = (e) => {
    setFilBox(e.target.value);
  };

  const filted = counName
    .filter((ob) => ob.name.common.toLowerCase().includes(filBox))
    .map((obb, i) => {
      return (
        <>
          <p key={i}>
            {obb.name.common} <button>show</button>
          </p>
        </>
      );
    });
  console.log(filted);

  if (filted.length > 10) {
    return (
      <div>
        <div>
          find countries: <input onChange={handFiltChg} />
        </div>
        <p>too many, be more specific</p>
      </div>
    );
  }

  if (filted.length === 1) {
    return (
      <div>
        <div>
          find countries: <input onChange={handFiltChg} />
        </div>
        <div>
          {counName
            .filter((ob) => ob.name.common.toLowerCase().includes(filBox))
            .map((obb, i) => (
              <div key={i}>
                <h2>{obb.name.common}</h2>
                <p>Capital: {obb.capital}</p>
                <p>Area: {obb.area}</p>
                <h3>Languages:</h3>
                <div>
                  {Object.keys(obb.languages).map((key) => (
                    <li key={key}>{obb.languages[key]}</li>
                  ))}
                </div>
                <img src={obb.flags.svg} alt="test logo" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        find countries: <input onChange={handFiltChg} />
      </div>
      <div>{filted}</div>
    </div>
  );
};

export default App;
