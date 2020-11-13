const server = require('./index')


server.listen(process.env.PORT || 3000, () => {
    console.log(`Running at port: ${process.env.PORT || 3000}`)
});