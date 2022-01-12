//! Express
//? Pros
// Flexible
// Popular and familiar with a lot of documentation
//Does not depend on patterns such as MVP, MVC, etc. So, developers can develop applications as they prefer, without a huge learning curve
//New developers can simply start developing applications even without much programming experience.
//You can use all the built-in express middleware or customize them for your usage
//Allows you to render HTML pages by passing arguments to the templates dynamically

//? Cons
//Unmaintained
//Last update was years ago
//Next version has beenin alpha for 6 years
//Does not know how to handle async/await which
//leaves you prone to UnhandledPromiseRejectionWarning exception

//! KOA
//? Pros
//1. It easier to write middleware because of the framework’s flexibility
//2. It uses ES6 async/await functions to eliminate the use of callbacks.
//3. It is very lightweight at around 500 lines of code.
//4. More modular

//? Cons
// 1. The open-source community is also much smaller in comparison meaning there is less support available
// 2. Although async/await eliminates the need for callbacks, multiple async calls at once can still result in async/await hell.
// 3. Koa specific middleware is also not compatible with other frameworks.
// 4.Koa does not provide any built-in routing middleware, so you have to install a module like koa-router.

//! Meteor
//? Pros
// Allows us to use a single language. So, developers can use JavaScript at both server-side and client-side development.
//Real-time updates by default. It automatically performs live updates. For example, if a user is filling a form, it will be pushed to all other browsers in realtime.
//The smart package option is quite beneficial. You can implement functionalities like user registrations in seconds by using Meteor packages. Therefore you can build applications quite fast.
//The community support. As a growing framework over half a million users, support for you is always there.
//The ability to convert web apps into mobile apps. Meteor allows us to implement native functions within our apps without using any 3rd party libraries.

//! Nest
//? Pros
//NEST’s architecture is also heavily inspired by the front end framework Angular or React. So for a Front end developer to jump into the back end NEST project might feel like working on the same project
//Nest framework supports middleware, exception filters, pipes, guards, interceptors, GraphQL, Websockets and many other components
//Using NestJS simplifies testing by supporting features such as DI containers and modules.
//Nest.js uses the latest version of TypeScript, which helps ensure that it will remain relevant in the rapidly changing JavaScript landscape and gives developers less context switching. The transition from Angular code to Nest is relatively easy.
//As a TypeScript-based web framework, strict type definition is possible

//? Cons
// Lacks documentation
// poor issue support
//Nest does hold an edge in its use of TypeScript and relation to Angular, but it doesn’t have the backing power of a large enterprise behind it.
//smaller community compared to other frameworks

//! Fastify - pros  and cons
//? pros
//Twice as fast as express
//full encapsulation for plug-ins
//automatically parses JSON with faster rendering
//cleaner syntax for writing async code in controllers
//quick routing