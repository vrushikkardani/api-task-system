const { usersRoutes } = require('../services/users');
const { userloginRoutes } = require('../services/userlogin');
const { clientRoutes } = require('../services/client');
const { projectRoutes } = require('../services/project');
const { taskRoutes } = require('../services/task');



const initialize = (app) => {
  app.use("/api/users", usersRoutes);

  app.use("/api/userlogin", userloginRoutes);
  app.use("/api/client", clientRoutes);
  app.use("/api/project", projectRoutes);
  app.use("/api/task", taskRoutes);




  app.use("/authError", (req, res, next) => {
    return next(new Error("DEFAULT_AUTH"));
  });

  app.get("/ping", (req, res) => {
    res.status(200).send({
      success: true,
      statusCode: 200,
    });
  });
};

module.exports = { initialize };
