# What is Microservice?

`Microservices` is a modular apporach and novel concept designed to address the need for large-scale application development as a group of loosely connected, autonomous services (microservices) interacting through a network and It is also known as `Microservice architecture`.

In simple words,`microservices architecture` is a collection of smaller independent units that execute each operation of the application as a separate service. So all of the self-contained services have their own logic & database and perform specific functions as well.

- ## Advantages of Mircorservice:
- Multiple technology Stack
- Each component and microservice module has its own codebase.
- Different teams can work on the different process at the same time
- System deployment for each service will be conducted individually

# What is Monolith Architecture?

- Monolith architecture is the traditional way of creating projects where all
  the services are written in the same project. The project contains logic
  for database connection, Auth, UI, backend, etc. For running the
  monolith architecture project, we need to compile and build the whole
  code which is not a good approach.

# What is Difference between Monolith and Microservice architecture?

- Here are the differences :-
  - In Monolith architecture, all the modules for different services are
    written in the same project whereas Microservice Architecture has
    different microservices for different service/functionality.
  - Monolith Architecture uses a single technology stack for the
    whole project, whereas Microservice architecture can have
    different tech stacks for different services.
  - In Monolith Architecture the components are tightly coupled
    whereas in Microservice architecture the services are loosely
    coupled.
  - For deploying the Monolith Architecture projects, we need to
    deploy the whole project as once which makes it harder. For
    Microservice architecture each service can be deployed
    separately.

# Why do we need useEffect Hook ?

- In functional components, after rendering the Shimmer UI or initial UI for the user, we need the useEffect hook to call APIs or call some function where some of the variable value changes.
- To make API calls and to run functions which are required to execute
  when some of the dependency changes, we need to use the useEffect
  hook to re render the component based on the value of some variables.
- So to keep the UI updated with the different values present in the
  component, we need to use the useEffect hook for re rendering the
  component and keep the Component updated.

# What is optional chaining?

`Optional chaining` is a javaScript feature that allow you to access the properties of an object and elments of an array without having to check whether the object or array is null or undefined first is known as Optional chaining.
`Optional Chaining` `?.` and `[]?.` is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns undefined.

# What is Shimer UI?

- Shimmer UI is the default UI or a placeholder UI which the users sees
  while the data is getting being loaded/fetched. Instead of a traditional loading spinner or black screen, Shimmer UI is used to enhance the user experience by showing some placeholder UI so the user thinks that the app is loading faster.

# What is the Difference between JS expression and JS Statement?

- A `JS expression` returns a value that we use in the application.

  - for example:--
    4 + 2 // output 6
    "foo".toUpperCase() // output 'FOO'
    console.log(2) // logs '2'
    isTrue ? true : false // returns us a true or false value based on isTrue value

- A `JS statement`, does not return a value.
  - for example: -
    - let x; // variable declaration
    - if () { } // if condition

If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

# What is conditional rendering, explain with a code example ?

`Conditional rendering` works in react as same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them.

## for example:

- Using Ternary operator as a shorthand way or writing an if-else statement
  {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
- Using an if…else Statement
  {
  (if (isLoggedIn) {
  return <UserGreeting />;
  }else {
  return <GuestGreeting />;
  })
  }

# What is `CORS`?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

# What is `async and await`?

`Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

## for example:

```javascript
async function getRestaurants() {
  const data = await fetch("Swiggy_API_URL");
  const json = await data.json();
}
```

# What is the use of `const json = await data.json()` in getRestaurants()?

- We use `.json()` on the response from a `fetch()` request to convert the JSON data in the response body into a JavaScript object. This is necessary because the response from the server is typically in text or binary format, and JavaScript needs data in object format to work with it effectively. `.json()` simplifies the process of parsing JSON data and makes it easier to use in your JavaScript code.
