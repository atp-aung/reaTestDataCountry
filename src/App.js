import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Filted from "./Filted";

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

  return (
    <div>
      <Filter handFiltChg={handFiltChg} />
      <Filted counName={counName} filBox={filBox} />
    </div>
  );
};

export default App;
