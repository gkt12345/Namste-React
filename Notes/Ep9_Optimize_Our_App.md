# --------- Optimze Our App ------------

# When and Why do we need lazy ()?

- Lazy loading is a programming technique that defers the loading of certain resources or data until they are actually needed. It is used in web development, to improve performance and user experience.
  Lazy() function is used when we want to add lazy loading to our React app. Without lazy loading the React app fetches the whole app code in a single file. If our components are very big, it might take too much time to fetch all the components in a single file. In this situation, lazy loading is used to fetch the component’s code only when it needs to be rendered. While using the lazy loading for the components, it won’t fetch the code in the main bundle but when it is called for rendered the code is fetched. One disadvantage for this is that it may take some delay while rendering UI because the code is getting fetched. To add lazy loading we need to import the component using lazy function. We also need to wrap the component in Suspense while rendering.

        const About = lazy(() => import("./components/About"));
        //Rendering
        {
        path: "/about",
        element: (<Suspense fallback={<div>Loading About Page...</div>} <About /></Suspense>)
        },

-

# What is Suspense?

- With Suspense, you can wrap components that are waiting for data with a <Suspense> component, and React will automatically show fallback content (such as loading spinners or placeholders) until the data is ready. This helps to create a smoother user experience by avoiding jarring loading transitions.

-

# Why we got this error : A component suspended while responding to synchronous input. This will cause the U wrapped with startTransition? How does suspense fix this error?

- This error is because of lazy loading, and to avoid this error we have to wrap our component inside <suspense> component. When we click at our lazy componet it have to fetch data, and in other hand because of react-routing react need imidatelly render that component and it not found it that's why it throw given error. and to avoid this error we need to wrap our lazy component inside <suspense>.

-

# Advantages and disAdvantages of using this code splitting pattern?

- Code splitting is a technique used in software development to improve performance and optimize the loading times of applications, especially web applications. It involves breaking down the application's codebase into smaller chunks that can be loaded on demand, rather than loading the entire codebase upfront. This pattern has several advantages and some potential disadvantages:

  **Advantages of Code Splitting**

- Faster Initial Loading Times : One of the primary benefits of code splitting is that it reduces the initial bundle size that needs to be downloaded by users. This leads to faster loading times, especially on slower internet connections or mobile devices.

- Improved Performance : Smaller bundles mean faster parsing and compilation times, which can lead to improved runtime performance. Smaller chunks of code can be parsed more quickly by the browser, resulting in a smoother user experience.

- Optimized Resource Usage : Code splitting allows you to load only the parts of the application that are immediately needed. This helps in conserving network bandwidth and reduces memory usage, particularly for large applications.

- Better Caching : Smaller code chunks are more cache-friendly. Once a chunk is loaded, it can be cached by the browser, leading to faster subsequent visits or interactions with the application.

- Parallel Loading : Code splitting allows the browser to load multiple smaller chunks in parallel, taking advantage of the browser's ability to make multiple network requests simultaneously. This can further speed up the loading process.

- Lazy Loading : Code splitting enables lazy loading of components or modules, which means that you can defer loading parts of your application until they are actually needed. This can significantly improve the perceived performance of your application.

**Disadvantages of Code Splitting:**

- Complexity : Implementing and managing code splitting can introduce some complexity to your build process and development workflow. Careful planning is required to ensure that code splitting is applied effectively and consistently.

- Increased Network Requests: While parallel loading is an advantage, excessive code splitting can lead to a higher number of network requests. This could potentially slow down the application if not managed properly.

- Dependency Fragmentation : Code splitting might result in the fragmentation of shared dependencies across different code chunks. This can increase the size of individual chunks if common dependencies are duplicated.

- User Experience During Loading : While code splitting improves loading times, users might still experience loading delays when interacting with parts of the application that require loading new chunks. Proper handling of loading states and user feedback is essential to mitigate this.

- Debugging and Tooling : Debugging code split applications can be slightly more challenging, as errors might occur in chunks that are not immediately visible. Additionally, some development tools and libraries might need additional configuration to work seamlessly with code splitting.
