# Router

# for instalation:- npm i react-router-dom

# import both in App.js :--

- createBrowserRouter:- configration to devlop path to diffrent elements.
- RouterProvider :- Provide Routing configration

# Earliar we were render AppLayout directly now we provide it to RoterProvider to router configration.

    eg:- ``root.render(<RouterProvider router{appRouter}>);``

# Error Handling (useRouteError):--

    - Supose if anyone type wrong path name, than we have to create a page for error handling.
    - useRouteError is a hook by react-router-dom this provide us information about error so we can use it

# Nested Routing (OutLet component) :---

- In this App we have 3 root component header, body, footer. And in routing when we type path name page will show acording to path. but with our body, header and footer also not showed over the page. For aboiding this we use nested Routing:-

1.  import Outlet from react-router-dom.
2.  create children array of object like createBrowserRouter.
3.  And in Applayout component remove body component and add it to children of appRouter and in place of body put OutLet as a component

# Two Types of Routing:-

- `Client Side Routing`:- - Client side routing allows our app to update the URL without requesting another document from the server. Instead, the app can immediately render new UI. we have to import Link tag from react-router-dom.

- `Server Side Routing`:- It basicly mean when click on elemnet whole page get refreshed, it requested another document from the server.

# Signle Page application:--

        because of client side routing it is called signle page application as well. when you click on about us or contact or any link tag it will not refresh our whole page only component getting updated.

# useParam hook:- (react-router-dom): --

    - this hook is used to import dynimic resId which comes from createBrowserRouter's daynamic path. basically if you link something and want to use it daynamicly. it will help you.
