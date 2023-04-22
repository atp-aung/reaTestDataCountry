import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Filted from "./Filted";

const App = () => {
  const [filBox, setFilBox] = useState("");
  const [counName, setCounName] = useState([]);
  //const [dtl, setDtl] = useState(false);

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

  const btnShow = (obb) => {
    const showWork = () => {
      console.log(obb.name.common);
      console.log("ghh");
    };
    return showWork;
  };

  return (
    <div>
      <Filter handFiltChg={handFiltChg} />
      <Filted counName={counName} filBox={filBox} btnShow={btnShow} />
    </div>
  );
};

export default App;
