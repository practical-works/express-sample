//==============================================================================
// ■ App (app.js)
//------------------------------------------------------------------------------
//     Application main entry point.
//==============================================================================
require("./utils");
const app = require("express")();

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = app;

//------------------------------------------------------------------------------
// ● Template-Engine
//------------------------------------------------------------------------------
app.set("view engine", "ejs");

//------------------------------------------------------------------------------
// ● Settings
//------------------------------------------------------------------------------
app.locals.website = {
  name: "Express Sample",
  desc: "ExpressJS simple example project featuring useful libraries.",
  author: "Ambratolm",
  url: "https://ambratolm.ml",
};
app.set("host", global.env.isDev ? process.env.HOST : "");
app.set("port", process.env.PORT);

//------------------------------------------------------------------------------
// ● Middlewares
//------------------------------------------------------------------------------
const middlewares = require("./middlewares");
app.use(middlewares);

//------------------------------------------------------------------------------
// ● Router
//------------------------------------------------------------------------------
const router = require("./router");
app.use(router);
