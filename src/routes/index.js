module.exports = app => {
    app.use('/', require('./home'))
    app.use('/user', require('./user'))
    app.use('/district', require('./district'))
    app.use('/zone', require('./zone'))
    app.use('/variable', require('./variable'))
    app.use('/measurement', require('./measurement'))
}