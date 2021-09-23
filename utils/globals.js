//==============================================================================
// ■ Global (gloabal.js)
//------------------------------------------------------------------------------
//     Globally available objects.
//==============================================================================

//------------------------------------------------------------------------------
// ● Environment
//------------------------------------------------------------------------------
const envVars = require("dotenv").config().parsed;
const { NODE_ENV } = process.env;
global.env = {
  vars: envVars,
  isDev:
    NODE_ENV === "development" ||
    NODE_ENV === "dev" ||
    (NODE_ENV !== "production" && NODE_ENV !== "prod"),
  log() {
    console.log("\tEnvironment:");
    console.log(
      "\t• Mode:",
      this.isDev ? "Development".warning : "Production".success
    );
    console.log("\t• Variables:");
    for (const key in this.vars) {
      console.log(`\t\t→ ${key}: ${this.vars[key].info}`);
    }
  },
};

//------------------------------------------------------------------------------
// ● URL
//------------------------------------------------------------------------------
global.url = function (host, port) {
  return global.env.isDev ? `http://${host}:${port}` : `${host}:${port}`;
};
