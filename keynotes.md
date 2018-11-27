## Modern Front-end terrain

front-end web development involves JavaScript, CSS and HTML.

So we are going to see newer language features, development tooling around
these languages. Also how the tooling helps us develop large scale web
application.

## ES6/ECMAScript2015

The first thing that I wanna talk about is ES6. ES6 refers to the version 6
of ECMAScript programming language that was released in the year 2015.
Hence also the name ECMA2015.

Now ECMAScript is the standardized name of JavaScript.

ES6 is a huge leap because it was released almost 4 years after the
version 5 of javascript, released back in the year 2011.

The goal of ES6 and newer versions are to provide language features
to ease-up developing large-scale web applications.

## Modules

It is a module system which let's us split code into
multiple reusable chunks. Then we simply import the chunk as we need and when
we need.

Let's say we have a function called `mountApplication`. Now we can write a file
`app.js` and have the file `export` the function for other modules.

## Modular Codebase

There are many immediate benefits from having this kind of modular codebase.

-   multiple team members can work on multiple parts or multiple files of the
    app without raising too much conflicts.
-   We can unit test individual modules separately as needed.
-   We can import the main entry-point of the app or perhaps an important part
    of the app and have it integration tested with tools like JEST and JSDOM.
-   When your application grows bigger, you will often find yourself extracting
    reusable functions within different modules. It scales really well.

## NPM Package

Then there is `npmjs.com` from where you can consume thousands of open source
and well maintained javascript or css libraries from the community.

If we wanted to use say, lodash and axios to fetch some data and show to the
user, we would simply install the libraries with `npm i lodash axios`.

Now we can seamlessly consume the libraries within our application with the
same ES6 module system.

## Code Splitting

There is this concept call Dynamic Import. What we do here is load just the
critical part of our javascript code during the first-paint or first render of
our application.

Then based on user interaction, we load and execute the code we need.

For example, we might have a button somewhere in the page and only if user
clicks on that button, we need the application code and execute it.

Using dynamic import, it is now possible.

In the example, we add an event listener to the button on `click`. When that
happens, we `import` the app and then we execute it.

This concept really works good to shrink the load time of larger apps.

## Babel

Babel is a javascript compiler to help you use next generation javascript
today.

Not all browsers support newer ES features. Luckily, we can compile them for
older versions of ECMAScript.

With babel, you can write your code with the latest, even upcoming javascript
features and have it compiled down targeting the browsers of your audience.

## SASS

SASS is a super-set language of CSS, which brings many missing features.

These features are handy to make CSS scale for large applications.

Now browsers don't understand SASS. So we have tooling like `node-sass` or
`dart-sass` to compile SASS to CSS.

## Webpack

Finally webpack, which brings everything together.

It is a static module bundler for modern javascript application.

You can have modular javascript and css code. It can handle all sorts of assets
like fonts, images through different loaders.

And it can use babel and node-sass under the hood.

## Setup
