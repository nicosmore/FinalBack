const UsersApi = require("../api/users.api");
const { successResponse, HTTP_STATUS } = require("../utils/api.utils");

const usersApi = new UsersApi();

const usersDao = new UsersDao();

class UsersControllers {
  getUsers = async (req, res, next) => {
    try {
      const users = await usersApi.getUsers();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersControllers;
