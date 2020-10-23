const axios = require("axios");

const purchases = require("./json/purchase.json");

let providers;
let users;
let products;

axios
  .get("http://limitless-cove-49173.herokuapp.com/user/list")
  .then((response) => {
    providers = response.data.map((provider) => provider._id);
  })
  .then(
    axios
      .get("http://limitless-cove-49173.herokuapp.com/user/list")
      .then((response) => {
        users = response.data.map((user) => user._id);
      })
      .then(
        axios
          .get("http://limitless-cove-49173.herokuapp.com/products")
          .then((response) => {
            products = response.data.map((product) => product._id);
          })
          .then(() => {
            purchases.map((purchase, index) => {
              setTimeout(() => {
                axios
                  .post(
                    "http://limitless-cove-49173.herokuapp.com/new-purchase",
                    {
                      idClient: users[index],
                      idProduct: products[index],
                      idProvider: providers[index],
                      purchaseValue: purchase.purchaseValue,
                    }
                  )
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }, 1000);
            });
          })
      )
  );
