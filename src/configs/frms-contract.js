const { web3 } = require("./web3");

const CONTRACTADDRESS = "0xB49b1DfbBb610BC34705CfEAd725C69D5371A31b";
const ABI = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_value",
				"type": "int256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const frmsContract = new web3.eth.Contract(ABI, CONTRACTADDRESS);

module.exports = frmsContract;
