# What is Allow CORS: Access-Control-Allow-Origin addon?

This addon lets you easily perform cross-domain ajax request in web applications. Simply activate the addon and perform the request. CORS or cross origin resource sharing is blocked (in javascript APIs) in modern browsers by default. Installing this addon will allow you to unblock this feature. Please note that, when the addon is added to your browser, it is inactive by default (toolbar icon is big grey C). If you want to activate the addon, please press on the toolbar icon once. The icon will turn to big orange C letter.

# useEffect Hook:

    - useEffect is a function provide by react
    - useEffect basically called after our component rendered.
    - this has 2 argument first a callback function and 2nd dependency
            syntax- useEffect(()=>{callbackfun}, [dep]);

    1. if you don't put dependency it will call every time while component rerender.

    2. if you put dependeny [] empty arr it will call one time when first time component render and after that it will call.

    3. if you put any state variable in dependency [state] it will call whenever state change or update.

# Shimer UI:

    - When we render our app and make Api calls before it we need to show loading for user expirence. instead of loading we show fake cards or dummy cards called shimer.
