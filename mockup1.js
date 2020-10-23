const axios = require("axios");

const providers = require("./json/provider.json");

providers.map((provider) => {
  setTimeout(() => {
    axios
      .post("http://limitless-cove-49173.herokuapp.com/new-provider", {
        companyName: provider.companyName,
        legalName: provider.legalName,
        contact: provider.contact,
        providerName: provider.providerName,
        CNPJ: provider.CNPJ,
        providerAdress: provider.providerAddress,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 1000);
});
