const Filted = (p) => {
  const filted = p.counName
    .filter((ob) => ob.name.common.toLowerCase().includes(p.filBox))
    .map((obb, i) => {
      return (
        <p key={i}>
          {obb.name.common} <button>show</button>
        </p>
      );
    });

  if (filted.length > 10) {
    return <p>too many, be more specific</p>;
  }

  if (filted.length === 1) {
    return (
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
    );
  }

  return <>{filted}</>;
};

export default Filted;
