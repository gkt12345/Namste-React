# Higher Order Component:-

- Higher Order Component is a function that takes a component as an argument and return it as new component that wraps the original component with new fetures.

-

# Controlled and Uncontrolled component

- Controlled components refer to components that have their state and behavior controoled by the parent component.
- Uncontrolled components refer to components that manage their own state internally.

-

# Context:-- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- 1. createContext:- returns a context object.

     - import { createContext } from "react";
       const UserContext = createContext({
       loggedUser: "Default User",
       });
       export default UserContext;

  2. useContext

     - import {useContext} from "react";
       import UserContext from "file path";
       const data = useContext(UserContext);
       // use this data anywhere in you component

  3. CreateContext.Provider- provide context value to components.

     - import UserContext from "pathname";
       const [userName, setUserName] = useState("");
       return (<CreateContext.Provider value={userName}>
       <Page  />  
       </CreateContext.Provider>);

  4. UserContext.consumer - provide context value to class base components.
     - import UserContext from "pathname";
       return (<UserContext.consumer>
       {(data)=>{<h1>{data.name}</h1>}}
       </UserContext.consumer>)
       `not recomended way`.
