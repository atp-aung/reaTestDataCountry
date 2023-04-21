import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [filBox, setFilBox] = useState("");
  const [counName, setCounName] = useState([]);

  useEffect(() => {
    console.log("effect run, currency is now");
    //https://restcountries.com/v3.1/all?fields=name,flags`

    if (filBox) {
      console.log("fetching exchange rates...");
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
    .map((obb, i) => <p key={i}>{obb.name.common}</p>);
  console.log(filted);

  if (filted.length > 10) {
    return (
      <div>
        <div>
          filter for name: <input onChange={handFiltChg} />
        </div>
        <p>too many, be more specific</p>
      </div>
    );
  }

  if (filted.length === 1) {
    return (
      <div>
        <div>
          filter for name: <input onChange={handFiltChg} />
        </div>
        <div>
          {counName
            .filter((ob) => ob.name.common.toLowerCase().includes(filBox))
            .map((obb, i) => (
              <div key={i}>
                <p>{obb.name.common}</p>
                <p>{obb.capital}</p>
                <p>{obb.area}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        filter for name: <input onChange={handFiltChg} />
      </div>
      <div>{filted}</div>
    </div>
  );
};

export default App;
