module.exports = app => {
  // @route POST /api/users
  // @desc Creates a new user
  // @access Private route
  //   app.post("/", createUser);
  app.get("/meow", (req, res) => {
    return res.status(200).send("WORKED");
  });
};
