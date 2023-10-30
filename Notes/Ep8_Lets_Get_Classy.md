# -------- Assingment 08 - Let's Get Classy ---------

-

# How d you create Nested Routes react-router-dom configuration ?

```javascript
 const appRouter = createBrowserRouter({
           path : "/parent",   // show path routing
           element : "<component />", // cmponent for perticuler path
           errorElement : "error",
           Children : [ // nested routes
                {
                    Path : "/child",
                    element : "<child-component />",
                    Children : [ // nested sub-child routes
                            {
                                Path : "/child",
                                element : "<child-component />",
                            }
                            {
                                Path : "/child",
                                element : "<child-component />",
                            }
                    ]
                }
           ]

    },
    {
        path: "/2nd Parent", // it will similer perform like first object
        element : "<component />"
    });
```

-

# Read about `createHashRouter`, `createMemoryRouter` from React Router docs?

- `createHashRouter` : This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".[Read More]("https://reactrouter.com/en/main/routers/create-hash-router")

- `createMemoryRouter` : Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.[Read More]("https://reactrouter.com/en/main/routers/create-memory-router")

-

# What is the order of `life cycle method` calls in `Class Based Components`?

1.  Consturctor() - (with state and props dummy data)
2.  Render() - (Initail rendering DOM menupulation)
3.  componentDidMount() - (api calls)
4.  Render() - (rerender component with api data )
5.  componentDidUpdate() - (update state, props)
6.  componentWillUnmount() - (when changes page)

-

# Why do we use componentDidMount?

- While the component is getting rendered the UI is rendered first so we can display some placeholder in the first render. We can not wait unlit api fetch data that's why first we render our dummy data to dom. then the API call is made for fetching data in the componentDidMount lifecycle method. After the data i fetched, the component is updated by render method. `componentDidMount is best place to make api calls`.

-

# Why do we use componentWillUnmount ? Show example?

- `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.

- For example:-- In `componentDidUpdate` set a timer with an interval of every one second to print in console . When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in `componentWillUnmount`. in this example `clearInterval(timer)` to clear the timer interval before unmounting the component.

-

# Why do we use `super(props)` in constructor?

- `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.

- super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.

- The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

-

# (Research) Why can't we have the `callback function` of `useEffect async`?

- `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
