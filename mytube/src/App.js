import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
