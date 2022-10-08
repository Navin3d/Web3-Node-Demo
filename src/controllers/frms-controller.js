const express = require("express");
const FrmsRouter = express.Router();

const { getAccounts } = require("../configs/web3");
const frmsContract = require("../configs/frms-contract");
const StatusCode = require("../utils/status-codes");


FrmsRouter.get("", async (req, res, next) => {

    const returnValue = {
        status: StatusCode.OK,
        message: await frmsContract.methods.getValue().call(),
    };

    return res.status(StatusCode.OK).json(returnValue);
});

FrmsRouter.get("/:value", async (req, res, next) => {
    
    const { value } = req.params;

    const account = await getAccounts();

    await frmsContract.methods.setValue(value).send({
        from: account[0]
    }).then(console.log);

    const returnValue = {
        status: StatusCode.OK,
        message: `Value: ${value}.`,
    };

    return res.status(200).json(returnValue);
});

module.exports = FrmsRouter;
