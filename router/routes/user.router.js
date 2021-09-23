//==============================================================================
// ■ User-Routes (user-router.js)
//------------------------------------------------------------------------------
//     User page routes entry point.
//==============================================================================
const userRouter = require("express").Router();

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = userRouter;

//------------------------------------------------------------------------------
// ● GET-Home-Page
//------------------------------------------------------------------------------
userRouter.get("/:userName", async (req, res, next) => {
  try {
    const { userName } = req.params;
    const { get } = res.locals.dataApi;
    const feedbacks = await get("feedbacks");
    const userMessages = feedbacks
      .filter((f) => f.author.toLowerCase() === userName.toLowerCase())
      .map((f) => f.message);
    const user = { name: userName, messages: userMessages };
    res.render("./", { title: "User", page: "user", user });
  } catch (e) {
    next(e);
  }
});
