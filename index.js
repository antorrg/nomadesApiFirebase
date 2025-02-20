
const app = require("./src/app.js")
const env = require("./src/configs/envConfig.js")

app.listen(env.Port, ()=>{
    console.log(`Server is listening on port ${env.Port}\nServer in ${env.Status}`)
})