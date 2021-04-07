function login(email, password) {
  if (!email || !password) return "error";

  if (!findUser(email, password)) {
    return "User not found";
  }

  return "success";
}

function findUser(email, password) {
  if (email == "test@test.com" && password == "test")
    return {
      id: 1,
      email: "test@test.com",
    };

  return null;
}

module.exports = {
  login,
  findUser,
};
