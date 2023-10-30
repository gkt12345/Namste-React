1. npx parcel index.html
   this will create a devlopment build for us and host it on localhost:1234
2. npx parcel build index.html
   this will build our project for production ready it will compress all file and folder.

# => We can also change these cammand by write script

       In package.json file we have scripts attribute there we modified commands like:
            "start" : "parcel index.html"
            "build" : "parcel build index.html"

    Now write for start :  npm run start  or npm start
    for build           :  npm run build

===========================================================

- React.createElement is an object and when we render it like root.render(), then it will become HTML element.

* const element = React.createElement(
  "h1",
  { className: "heading" },
  "React Create Element"
  );

# This will convert like this :-

react.createElement => ReactElement => object => HTMLElement

- const jsxElement = <h1 className="head">React from jsx 🚀</h1>;

# jsx will convert like this:-

JSX => Babel transpiled it to React.createElement => ReactElement => JS Object => htmlElement(render)

# Note:

      Parcel manage everything for us when we create element from react it was some tricky process to write and understand code to us devloper that's why JSX come into picture code looks easy to understand but process behind the seen same.
      Bebel convert this JSX code to javascript and all things manage by parcel.

======================================================================

# Component:

1.  Functional Component
    -> A function that retrun JSX is functional component
2.  Class Component

=================================================================

# Component Composition:

When we put component inside the component is called component composition.

Eg:-
const Heading = () => <h1 className="head"> Namste React 🚀</h1>

const HeadingComponent = () => (

   <div className="head">
      <Heading />
      <h1 className="heading">Namste React functional Component</h1>
   </div>
   );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

======================================================================

# How to put React Element into Component:

{heading}: we just put our element inside component by using {}

Eg:-
const Heading = () => <h1 className="head"> Namste React 🚀</h1>

const HeadingComponent = () => (

   <div className="head">
      {Heading}
      <h1 className="heading">Namste React functional Component</h1>
   </div>
   );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

======================================================================

# Very Important:

      basicly if you want put component inside component than do it like this:   <component /> or <component> </component>

      and if you want put react element inside the component than just wrap it in to {reactElement} because react element is an object at end of the day:
