const axios = require("axios");

const users = require("./json/user.json");

users.map((user) => {
  setTimeout(() => {
    axios
      .post("http://limitless-cove-49173.herokuapp.com/new-user", {
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        CPF: user.CPF,
        contact: user.contact,
        userAddress: user.userAddress,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 1000);
});
