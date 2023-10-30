import { useRouteError } from "react-router-dom";

const Error = () => {
  const resErr = useRouteError();
  console.log(resErr);
  return (
    <div>
      <h1>Opps!!!</h1>
      <p>Sorry, an unspected error has occurred</p>
      <h4>
        {resErr.status}: {resErr.statusText}
      </h4>
    </div>
  );
};

export default Error;
