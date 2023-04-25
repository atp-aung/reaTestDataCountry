import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Weather from "./Weather";
//import Filted from "./Filted";

const App = () => {
  const [filBox, setFilBox] = useState("");
  const [counName, setCounName] = useState([]);

  useEffect(() => {
    console.log("effect starts run");

    console.log("fetching nations...");
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        console.log(response);
        setCounName(response.data);
      })
      .catch((err) => console.log("erro"));
  }, []);

  const handFiltChg = (e) => {
    setFilBox(e.target.value);
  };

  // const getCity = () => {
  //   const getCiw = () => {
  // counName
  //   .filter((ob) => ob.name.common.toLowerCase().includes(filBox))
  //   .map((obb, i) => {
  //     return obb?.name?.common;
  //   });
  //     const cityName = "Tokyo";
  //     return cityName;
  //   };
  //   return getCiw;
  // };

  // const btnShow = (obb) => {
  //   const showWork = () => {
  //     console.log(obb.name.common);
  //     console.log("ghh");
  //     axios
  //       .get(`https://restcountries.com/v3.1/name/${obb.name.common}`)
  //       .then((response) => {
  //         console.log(response);
  //         setCounName(response.data);
  //       })
  //       .catch((err) => console.log("erro"));
  //   };
  //   return showWork;
  // };

  return (
    <div>
      <Filter handFiltChg={handFiltChg} />
      <div>
        {counName
          .filter((ob) => ob.name.common.toLowerCase().includes(filBox))
          .map((obb, i) => {
            return <p key={i}>{obb.name.common}</p>;
          })}
      </div>
      <Weather
        getCity={() => {
          const cityName = "London";
          return cityName;
        }}
      />

      {/* <Filted counName={counName} filBox={filBox} btnShow={btnShow} /> */}
    </div>
  );
};

export default App;
