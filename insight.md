## Front-end tooling and DX for WordPress Development

I want to talk about what today's front-end development terrain looks like,
how much benefit it gives to us and how we can bring the same to our WordPress
themes and plugins.

When we talk about modern front-end development, what we really mean is, using
ES6+ javascript features, CSS compilers like SASS, LESS along with build-time
asset optimization.

All this comes at a cost. We have to setup compilers like babel, sass and
bundlers like webpack, parcel etc. That's a lot of tooling to learn and
maintain.

Then why bother? The answer is, what we gain, far outweighs the trouble
we have to go through. For example

-   We can make our codebase modular, thanks to ES6 Module system.
-   We can instantly consume all the packages from npmjs.
-   We can start using modern javascript libraries like React, Vue etc.
-   We can create faster applications by leveraging WordPress REST API
    and JavaScript based front-end logic.
-   We can have a solid **Developer Experience** if we can setup the tooling right.

Just with `webpack-dev-server` alone, we can easily spin up a development server
which would serve files, do live reload and if properly set, provide hot module
replacement (HMR), i.e, showing changes without even reloading the browser.

In my attempt to create similar tooling for WordPress, I came up with
[wpack.io](https://wpack.io). Right out of the box, it provides

-   webpack bundler, pre-configured with most used defaults.
-   browser-sync and webpack based dev server, which proxies your own WP server
    and gives you all the live reload and HMR benefits.
-   One command to create production builds and distributable zip files for your
    theme or plugin.

So if tooling is what held you back to enter the realm of modern front-end stack,
give wpack.io a try and start developing modern JavaScript apps within WordPress.
