const routes = require('../routes/index')
const bodyParser = require("body-parser")

module.exports = app => {
    // Settings
    app.set('port', process.env.PORT)
   
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    // Routes
    routes(app)

    // Static files
    /* app.use('/public', express.static(path.join(__dirname, '../public'))) */

    return app
}