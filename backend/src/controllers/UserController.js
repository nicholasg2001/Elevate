class UserController {
  static getUsers = (req, res) => {
    res.status(200).send("this is a test");
  };
}

export default UserController;
