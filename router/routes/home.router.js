//==============================================================================
// ■ Home-Router (home.router.js)
//------------------------------------------------------------------------------
//     Home page routes entry point.
//==============================================================================
const homeRouter = require("express").Router();

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = homeRouter;

//------------------------------------------------------------------------------
// ● GET-Home-Page
//------------------------------------------------------------------------------
homeRouter.get("/", async (req, res, next) => {
  try {
    const { get } = res.locals.dataApi;
    const feedbacks = (await get("feedbacks")).reverse();
    const { success, errors } = req.session;
    req.session.success = false;
    req.session.errors = undefined;
    res.render("./", {
      title: "Home",
      page: "home",
      feedbacks,
      success,
      errors,
    });
  } catch (e) {
    next(e);
  }
});

//------------------------------------------------------------------------------
// ● POST-Home-Page
//------------------------------------------------------------------------------
const { validationResult } = require("express-validator");
const feedbackValidator = require("../validators/feedback.validator");
homeRouter.post("/", feedbackValidator, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const feedback = req.body;
      const { add } = res.locals.dataApi;
      await add("feedbacks", feedback);
      req.session.success = true;
      res.redirect("/");
    } else {
      req.session.errors = errors.array();
      res.redirect("/");
    }
  } catch (e) {
    next(e);
  }
});
