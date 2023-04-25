import Weather from "./Weather";

const Nation = (p) => {
  return (
    <>
      <div>
        {p.counName
          .filter((ob) => ob.name.common.toLowerCase().includes(p.filBox))
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
      <div>
        {p.counName
          .filter((ob) => ob.name.common.toLowerCase().includes(p.filBox))
          .map((obb, i) => (
            <div key={i}>
              <Weather getCity={obb.capital} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Nation;
