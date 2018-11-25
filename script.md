## Intro

Hello everyone, I am Swashata Ghosh. I would like to say it feels awesome to be
here. This is my first talk so I just hope I don't choke before the time runs
out.

So, you can find me on twitter, github by the handle @swashata and I love WordPress
and I love JavaScript.

---

## Title

That being said, today I wanna talk about and I wanna show you some front-end
tooling for WordPress themes and plugins and more over the developer experience
it gives. Hopefully not the like the one in the gif.

---

## Terrain

So before we begin, let us see what the modern front-end terrain looks like.

Front-end web development basically deals with JavaScript, CSS and HTML. So when
we add the term modern to it, we basically mean utilizing the newer language
features and tooling.

We use all the new ES6+ javascript features. We use ES Module systems, CSS
compilers and pre-processors, as well as some build time optimizations.

---

## What? Benefits?

Which brings us to the question, what are these and how is it going to benefit
us, the developers. Let's see a few examples.

---

## ESNext

The first one is obvious using the latest ES6+ JavaScript features. Now there
are many new things to cover here, but I would like to show just my personal
favorite, the destructing statements.

At first we see, what the code would look like if we were to swap two variables.

Now if we were using ES6, this is how we would do, with the help of array
destructuring.

---

## ES6 Modules

All right ES6 Modules. It is a module system which let's us split code into
multiple reusable chunks. Then we simply import the chunk as we need and when
we need.

Let's say we have a function called `mountApplication`. Now we can write a file
`app.js` and have the file `export` the function for other modules.

Then with-in any other module, we can simply `import` it and execute it. There
are many immediate benefits from having this kind of modular codebase.

-   multiple team members can work on multiple parts or multiple files of the
    app without raising too much conflicts.
-   We can unit test individual modules separately as needed.
-   We can import the main entry-point of the app or perhaps an important part
    of the app and have it integration tested with tools like JEST and JSDOM.
-   When your application grows bigger, you will often find yourself extracting
    reusable functions within different modules. It scales really well.

---

## NPM Package

Then there is `npmjs.com` from where you can consume thousands of open source
and well maintained javascript or css libraries from the community.

If we wanted to use say, lodash and axios to fetch some data and show to the
user, we would simply install the libraries with `npm i lodash axios`.

Now we can seamlessly consume the libraries within our application with the
same ES6 module system.

---

## Dynamic Import

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

---

## And More

And there are many many more advantages we get. But I want to talk about one
thing the most and that is...

## Awesome DX

The developer experience it brings to the table.

## What is DX?

Now what really is DX? What it means to us, the developers. Put simply it is
the experience we get when we, the developers, use something to develop an application.

It could be the language itself, tooling, editor or perhaps how we build the app
or deploy it.

Imaging yourself in a scenario where you are developing in a language that
requires to compile itself. So for every changes you make, you have compile it,
run it against the newly compiled source and check the output.

When we, WordPress developers are creating a plugin or a theme, how often do
we find ourselves changing a javascript, PHP or a CSS file and then refreshing
the browser to check the output?

So the question is, can modern front-end tooling improve this experience? If so,
how?

## Example Webpack

Let us pick `webpack` as the primary tooling and develop a simple react based
todo application.

> simply speaking webpack is a static module bundler for modern JavaScript applications.

With webpack, javascript and css modules.

It can manage and optimize fonts, images and all other sorts of files.

Under the hood, we can instruct webpack to use babel for compiling javascript
or node-sass for compiling sass files.

## Setup

So what do we need to set things up?

[Read from presentation].

## Demo

[show package.json]
Firstly we need to use nodejs and npm to install the tooling. Here in this project
I have webpack, webpack-cli, webpack-dev-server, babel, node-sass etc already
installed.

[show app.js]
Then we write our codebase in ES Module system. We have an entry-point `app.js`,
where we `import` things from npm packages, like React, ReactDOM, bulma etc.

We also import our own code. Then, when the document is ready, we ask ReactDOM
to render our application in a particular DOM node.

[show index.html]
This DOM node, along with our scripts are all linked in the `index.html` file,
which serves our app.

Here you can see, we are expecting a file from `dist/bundle.js` and webpack is
going to generate that for us.

So it is time we go and tell webpack, hey I want you to compile this `app.js`
files and make sure somehow it has all the dependencies it needs.

[show webpack.config.js]
To do that, we create a file called `webpack.config.js` at the root of the project
and define the `entry`. We also mention the output filename and where to put the
file.

We do need to tell webpack, which other `loaders` it needs, to handle the imports.
For javascript we have told webpack to use `babel-loader`, which in turn is going
to use `babel`. For CSS or SASS, we are going to use these three loaders in this
particular order.

[show package.json]
But we also need a development server from where we can see our app. For that
we have `webpack-dev-server`. Behind the scene, it tells webpack to compile our
files and serve from a URL.

To fire things up, we have this `start` npm script, which is executing the
binary `webpack-dev-server` that comes with the package.

So let us do that and see what happens.

...

[run npm start]
Now we have our application running from a local server, all thanks to webpack
and webpack dev server. So what happens when we change something?

Perhaps we would like to change the title? Let's do that.

[change TodoApp/index.jsx]

It got automatically refreshed right?

So now let me show you this. Is there a way to have the change, without even page
reload??

[show package.json]

Notice, in package.json, we are running webpack-dev-server in `hot` mode! It gives
us a functionality called Hot Module Replacement. That is to replace a module
when it changes, without reloading the browser. So can we use this concept and
ReactDOM's render capability to do the same? Let's see

[show app.js]

We change our main entry-point `app.js` file and plug a code to tell webpack
that hey, when anything from `components/TodoApp` changes, I want ReactDOM
to re-render the DOM node with the new component.

Hit save and let it refresh once.

[change TodoApp/index.jsx]

Now if we want to change the title, it just happens, without page reload!

[show TodoApp/TodoList.jsx]
Now I don't like this animation, I want it like super-slow. So let us change
this `wobbly` to `slow`? And it works!

Nah, I would rather settle with `wobbly` for now. Yeah that looks better.

## Can we do that?

So that was some good DX right! Then here's my question, can we have that with
WordPress? Can we have webpack and webpack-dev-server and HMR with WordPress?

Well, let me answer that for you, YES.

## Config?

So does it mean, I have to like configure webpack, babel, node-sass and all those
tooling?

And I have to do that everytime I start a project?

And how do I even enqueue that within WordPress. How WordPress would know
which file webpack generated and how is it doing all the HMR? I mean we saw
that HMR is something provided by webpack-dev-server. But our WordPress is already
being served from a server?

Well let us see.

## wpack.io

Let me show you a tooling that I have been working on. It is called
wpack.io. It is OSS and MIT licensed and the goal is to provide and out
of the box developer experience for setting up the modern tooling.

It works with any local WordPress development server you might have.

You can integrate with any on-going projects.

Under the hood, it does provide a dev server with all the HMR goodies. That
dev server is basically a proxy of your WordPress dev server.

This whole thing requires 3 commands to setup and 3 more commands
to start, build and pack.

## Integrate

Now `@wpackio/scripts` is a nodejs based tool. To help you integrate with your
project easier, we have a CLI tool. You just run `npx @wpackio/cli` and it
installs all the packages and dependencies. Then you run `npm run bootstrap`
where it will ask you a bunch of questions about your project to self configure
itself.

We would also need a small composer PHP dependency to consume the javascript
and css files within WordPress.

Now let us really really see, how this is going to work.

## Demo

So here I am trying to port the todo application inside a WordPress Plugin. Now
this project is already bootstrapped. So we have all these files like

[show sidebar]
wpackio.project.js, wpackio.server.js

[show composer.json]
We already have the `wpackio/enqueue` composer dependency installed.

[show class-wpackio-plugin-init.php`]
What we have here is a shortcode, which is just enqueuing the assets generated
by webpack. Within the shortcode, we return a DOM node where the app will mount.

[show wpackio.project.js]
Through this file, we are passing similar entry-point config to webpack and the
rest is taken care for us.

[show wpackio.server.js]
Now only thing left it to tell wpackio-scripts about our own development server.
Here I am using vvv which gives me a WordPress server at wca.test.
But it could be anything, perhaps docker, or wamp or mamp.

[run command]
So let us run the command and see what happens.

Okay it's all there right? Now Let's change the title.

[show TodoApp/index.jsx]
Yay!! It's working...

So let's stop the development server and create some production build.

[press ctrl+c]
We press q or ctrl+c.

[run npm run build]

And we run `npm run build`.

[open wca.test]
Let's open our WordPress dev server directly here.

Alright awesome todos.

What if we wanted to create a distributable zip file?

Well that is one single command away too.

[run npm run archive]

Now that comes really handy to incorporate continuous integration or continuous
deployment to your workflow.

## But How?

So how does it all work? What is being used under the hood here?

Well all this is possible, because of the awesome JavaScript community. We have
these tooling like babel and node-sass which can compile our JS and SASS files.
We have webpack as the bundler. We have to thanks browser-sync and webpack
middlewares which provides us the hot proxy server.

## Was it fun?

So let me ask you this. Was it fun?

## Recap

Let's take a step back and revisit what we learnt today.

Front-end tooling is

[read from presentation].

## Thank you

Thank you everyone, for following through my presentation here. I know I have
messed a few things up and hopefully I won't, when we all come
back next year, yeah?

And I would like to thank the awesome organizers of WCA, who gave me the opportunity
to speak here. Really thank you everyone.

## Notes

And before we begin our Q/A, let me tell you that you can access the slides
and all the demos from wca.wpack.io. Also full documentation of the tooling
can be found at these URLs.

## QA

So yeah, that was all I wanted to present to you. We have 10 mins for QA so please
ask me anything that comes to your mind.
