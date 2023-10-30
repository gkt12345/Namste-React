/* 
    <div id="parent">
        <div id="child">
            <h1>I am 1st child</h1>
            <h1>I am 2nd child</h1>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am 1st child"),
    React.createElement("h1", {}, "I am 2nd child"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



/* 
    <div id="parent">
        <div id="child1">
            <h1>I am 1st child</h1>
            <h1>I am 2nd child</h1>
        </div>
        <div id="child2">
            <h1>I am 1st child</h1>
            <h1>I am 2nd child</h1>
        </div>
    </div>
*/

// const parent = React.createElement(
//     "div",
//     { id: "parent" },[
//         React.createElement("div", { id: "child1" }, [
//             React.createElement("h1", {}, "I am 1st child"),
//             React.createElement("h1", {}, "I am 2nd child"),
//           ]),
//           React.createElement("div", { id: "child1" }, [
//             React.createElement("h1", {}, "I am 1st child"),
//             React.createElement("h1", {}, "I am 2nd child"),
//           ])  
//     ]
    
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(parent);
  


