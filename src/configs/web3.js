const Web3 = require("web3");
// window.ethereum.request({ method: "eth_requestAccounts" });
const web3 = new Web3("http://localhost:7545");

const getAccounts = async () => (
    await web3.eth.getAccounts()
);

module.exports = {
    web3,
    getAccounts
};
