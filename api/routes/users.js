module.exports = app => {
  // @route POST /api/users
  // @desc Creates a new user
  // @access Private route
  app.post("/", createUser);
};
