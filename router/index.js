//==============================================================================
// ■ Router (router/index.js)
//------------------------------------------------------------------------------
//     Routes main entry point.
//==============================================================================
const router = require("express").Router();

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = router;

//------------------------------------------------------------------------------
// ● Routes
//------------------------------------------------------------------------------
const homeRoutes = require("./routes/home.router");
const aboutRoutes = require("./routes/about.router");
const otherRoutes = require("./routes/other.router");
router.use("/", homeRoutes);
router.use("/about", aboutRoutes);
router.use("/*", otherRoutes);