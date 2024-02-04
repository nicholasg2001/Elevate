const getUsers = (req, res) => {
  res.status(200).send("Users Route!");
};

module.exports = {
  getUsers,
};
