const { PORT } = require("../configs/index");

const appListenHandler = () => {
    console.log(`App started in port: ${PORT}...`)
}

module.exports = {
    appListenHandler
};
