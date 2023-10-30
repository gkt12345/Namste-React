// creating a element is core thing of react
const heading = React.createElement(
  "h1",   // tag
  { id: "heading", xyz: "abc" }, // attributes
  "Hello World from React."      // child
);

console.log(heading);  // heading is object now

// when we create root it and rendring something it it is job of react dom
const rootEl = ReactDOM.createRoot(document.getElementById("root"));

// render heading inside root.
// this render method converting heading(object) to h1 tag and put it into the react dom
rootEl.render(heading);  // heading is h1 tag now
