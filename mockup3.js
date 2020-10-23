const axios = require("axios");

const products = require("./json/product1.json");

axios
  .get("http://limitless-cove-49173.herokuapp.com/user/list")
  .then(function (response) {
    let providers = response.data.map((provider) => provider._id);

    products.map((product, index) => {
      setTimeout(() => {
        axios
          .post(
            "http://limitless-cove-49173.herokuapp.com/products/new-product",
            {
              providerID: providers[index],
              name: product.name,
              description: product.description,
              rating: product.rating,
              price: product.price,
              stock: product.stock,
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
  });
