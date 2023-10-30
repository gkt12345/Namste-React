Installing package.jason file in our app from NPM

1. npm init 
2. package name - enter
3. version - enter(->) 
4. discription: give name ->
5. entry point: file name eg(index.js/app.js) ->
6. test command: jest (->)
7. git repository: (https://github.com/gkt12345/Namste-React.git)
8. keyword: give any keyword
9. author: Gaurav Trivedi
10. license: enter
11. Is this ok: enter

=====================================================================
Install depeendency to our app, "Parcel"
 
   -> npm install -D parcel

Note-> npm install -D parcel:  what is -D here?
         there are two types of depeendency one for prod and one for 
         dev we use dev (-D).   
      
=======================================================================   

Build App or Egnite our app by parcel.
      
-> npx parcel index.html

Note->1. npx means we are executing package
      2. npm means we are installing package
      3. Parcel:
            -> Dev Build, 
            -> create Local Server, 
            -> HMR-hot module replacement (refresh page) for us
            -> it refresh automatically by File Watching Algorithm - written in c++
            -> Faster build - caching
            -> Image Optimization
            -> Minification files
            -> Bundling
            -> Compress
            -> Consistant Hashing
            -> code splitting
            -> Differential Bundling - to support older browsers
            -> Diagnostic
            -> Error Handling
            -> https
            -> Tree Shaking Algorithm - remove unused code
            -> Different dev and prod builds.
                  $ production ready builds
                     ->  parcel build index.html

==============================================================

install react and react-dom depeendency in our app

->   npm install react
->   npm install react-dom

after installing react it give refrence error when you execute it on the server
then we have to import React and ReactDOM from "react" and "react-dom" 


=============================================================

Production ready Build For our App by 'parcel build'

      -> parcel build index.html

Note-> for prod build we have to remove "main":"app.js" from package.jason file



=======================================================

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











