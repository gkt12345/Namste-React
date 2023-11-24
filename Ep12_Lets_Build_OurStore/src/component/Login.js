import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const Login = ({ onClose, setLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUserName } = useContext(UserContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const onSubmitHandler = () => {
    name && setUserName(name);
    onClose();
    setLogin();
  };
  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90">
      <div className="flex justify-center mt-20 ">
        <div className=" w-[450px] h-[350px] bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Log in
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent font-bold px-3 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="p-6 space-y-6 ml-14">
            <label>Name: </label>
            <input
              className="border ml-2 p-1 rounded-md outline-none"
              placeholder="Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label>Password: </label>
            <input
              className="border ml-2 p-1 rounded-md outline-none"
              placeholder="password: "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex justify-center p-6 rounded-b border-t border-gray-200">
            <button
              type="button"
              className="w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onSubmitHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
