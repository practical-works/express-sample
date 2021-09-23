//==============================================================================
// ■ Router (router/index.js)
//------------------------------------------------------------------------------
//     Routes main entry point.
//==============================================================================
const express = require("express");
const router = express.Router();

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = router;

//------------------------------------------------------------------------------
// ● Static-Content
//------------------------------------------------------------------------------
router.use(express.static("./static/"));

//------------------------------------------------------------------------------
// ● Routes
//------------------------------------------------------------------------------
const homeRouter = require("./routes/home.router");
const aboutRouter = require("./routes/about.router");
const userRouter = require("./routes/user.router");
const otherRouter = require("./routes/other.router");
router.use("/", homeRouter);
router.use("/about", aboutRouter);
router.use("/u", userRouter);
router.use("/*", otherRouter);

//------------------------------------------------------------------------------
// ● Error-Handler
//------------------------------------------------------------------------------
router.use((err, req, res, next) => {
  const { name, message, stack } = err;
  console.log(name.bgDanger, message.danger);
  if (global.env.isDev) {
    console.log(stack);
  }
  res.status(500).render("./pages/500", {
    title: "Error",
    url: req.baseUrl,
    error: global.env.isDev
      ? { name, message, stack }
      : {
          name: "Error",
          message: "An error has occurred. Please try later.",
        },
  });
});
