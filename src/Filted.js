import Nation from "./Nation";

const Filted = (p) => {
  const filted = p.counName
    .filter((ob) => ob.name.common.toLowerCase().includes(p.filBox))
    .map((obb, i) => {
      return (
        <p key={i}>
          {/* {obb.name.common} <button onClick={btnShow(obb)}>show</button> */}
          {obb.name.common} <button onClick={p.btnShow(obb)}>show</button>
        </p>
      );
    });

  if (filted.length > 10) {
    return <p>too many, be more specific</p>;
  }

  if (filted.length === 1) {
    return <Nation counName={p.counName} filBox={p.filBox} />;
  }

  return <>{filted}</>;
};

export default Filted;
