module.exports = app => {
    app.use('/', require('./home'))
    app.use('/user', require('./user'))
    app.use('/district', require('./district'))
}