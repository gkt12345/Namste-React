# Single Responsebilty Princple:

    - If we follow Single Responsebilty Princple our code become :--
        1. Mantanable
        2. Reuseable
        3. Tastable

-

# Custom Hooks:-

      - We can create custom hooks for make our app maintanable, reuseable, tastable. It is good to do our component single responbilty. these custom hooks are nothing just normal javascript function. we only know what input we have in it and what out put we return from that hook. and import it like normal hooks.

-

# Lazy Loading :---

    Lazy loading also known as Chunking, Code Splitting, Dynamic Bundling, On Demamd Loading.
    When our app has thausands of component and build than bundling happen. (bundling  means this parcel combine all component into one js file in dist folder). Now our all api calls happen and in our app preformense issue causes.
    Now React comes with something know as lazy loading, lazy laoding do not render direcly those files which you put inside it.

    When your bundle size grow we use lazy loading to reduce there size this will not fetch all data at once, when you do want to go that component that it load.

```JavaScript
        import {lazy, Suspense} from "react";
        const Grocery = lazy(()=>import("./component/Grocery"));

    // While you load Grocery it will take time to fetch data but react is so powerfull in fast rendering and it will not find the data over there because it take some time to fetch data that's why it will throw an error. "error: A component suspended while responding to synchronous input". for this error we have Suspence and we wrap our element inside it. it take fallback as an argument in it can be render shimer UI.


       {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /><Suspense>,
       }
```
