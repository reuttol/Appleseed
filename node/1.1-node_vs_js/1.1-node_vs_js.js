//! Application
// Browser.js is mainly used for client-side applications like validations on a web page or dynamic page display and as the name suggests it gets executed in the browser only while in the case of Node.js javascript code gets executed outside the browser as it is an interpreter as well as an environment for running javascript and used for server-side applications.In nutshell, we can say Browser.js is used for frontend while Node.js is used for backend applications.

//! System access
// Node.js has full system access i.e can read and write directly to the file system like any other application that also concludes that we can write complete software using Node.js while Browser.js is sandboxed for the safety purposes and have access limited to the browser. Now, that also makes it important that we should refrain from running any untrusted Javascript in Node.js.

//! Running Engine
// Browser.js runs any engine like Spider monkey (Firefox), JavaScript Core (Safari), V8 (Google Chrome) accordingly to the browser while Node.js runs in a V8 engine which is mainly used by google chrome.

//? NodeJS
//NodeJS doesn't have the following while JS has them:
//window => "object cause it doesnt have a window to draw anything.";
//location => "object is related to a particular URL that means it is for page-specific.";
//document => "object also, cause it never have to render anything on a page.";

//Node.js is headless i.e without any GUI while Bowsers are not headless

//? BrowserJS
//global =>"object contains several functions that are not available in browsers as they are needed for server-side works only.";
//require => "object which is used to include modules in the app.";
//process => "object which has various properties and methonds to manipulate the nodeJS process which is running";

//! Modularity
// In Node.js everything is a module i.e it is mandatory to keep everything inside a module while moduling is not mandatory for browser javascript.