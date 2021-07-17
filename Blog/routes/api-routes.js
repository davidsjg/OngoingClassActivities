const db = require('../models')

module.exports = (app) => {
    app.get('/api/posts', (req, res) => {
        db.Post.findAll({})
        .then((dbPost) => {
            return res.render("blog", {results: dbPost})
        })
    })
}