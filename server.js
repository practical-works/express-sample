//==============================================================================
// ■ Server (server.js)
//------------------------------------------------------------------------------
//     Server bootstrap point.
//==============================================================================
const app = require("./app");
const { host, port } = app.locals.settings;

//------------------------------------------------------------------------------
// ● Server
//------------------------------------------------------------------------------
const server = app.listen(port, host, () => {
  const { address, port } = server.address();
  const url = global.development
    ? `http://${host || "localhost"}:${port}`
    : `${address}:${port}`;
  console.cls();
  console.log("Server is listening...".bgSuccess);
  console.log("\tAddress:", url.link);
  if (global.development) {
    console.log("\tEnvironment:");
    for (const key in global.environment) {
      console.log(`\t• ${key}: ${global.environment[key].info}`);
    }
  }
});
