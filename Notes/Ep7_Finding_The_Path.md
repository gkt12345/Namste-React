# Episode 07 - Finding The Path

# What are various ways to add images into our App? Explain with code examples?

There are two ways to add images in React app. Either we can use CDN
links and provide different IDs or we can directly use links to render
images.
First way is to store the CDN Url and then provide different Ids in the img tag to render the image.

import { CDN_URL } from "../utils/consts";
<img
alt="restaurant Logo"
src={CDN_URL + cloudinaryImageId}
className="res-logo"
/>

Second way is to directly import images which are stored in our local
project.
import { Logo } from "../utils/img/Logo.png";
<img
alt="restaurant Logo"
src={Logo}
className="res-log

-

# What would happen if we do `console.log(useState())`?

- When we do console.log(useState()), if gives us an array with two
  elements where first element will be undefined as we haven’t provided
  any default value. The second element of the array is the function for
  changing the value of state variable.

-

# How will useEffect behave if we don’t add a dependency array?

- If we don’t provide a dependency array in useEffect then it will execute the callback function on every rerender.

-

# What is SPA?

- SPA is called Single Page Application. SPA is a web application which
  renders different components based on the URL. When we change the
  URL, only the component which is rendered is changed and the browser
  does not refresh the page when the URL is changed unline traditional
  websites.

# What is SPA?

`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

-

# What is difference between Client Side Routing and Server Side Routing?

- In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

- In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to
  the new page without sending any request to backend. All Single Page Applications uses `client-side routing`.
