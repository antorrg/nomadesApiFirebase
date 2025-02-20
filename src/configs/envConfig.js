const dotenv = require("dotenv")

const configEnv = {
    production : '.env',
    development: ".env.development",
    test : ".env.test"
}
const envFile = configEnv[process.env.NODE_ENV ] || "production"
dotenv.config({ path:envFile})

//const Status = Object.keys(configEnv).find(key => configEnv[key]===envFile)|| "production";
const Status = process.env.NODE_ENV || "production";

const {
    PORT,
} = process.env;

module.exports = {
    Port: PORT,
    Status,
}