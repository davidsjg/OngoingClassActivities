const db = require('../models')

module.exports = (app) => {
    var scripts = [{ script: 'assets/js/blog.js' }];
    app.get('/api/posts', (req, res) => {
        db.Post.findAll({})

        .then((dbPost) => {
            return res.render("blog", {results: dbPost, scripts: scripts})
        })
    })

    app.post('/api/posts', (req, res) => {
        console.log(req.body)
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category,
        })
        .then((dbPost) => {
        
        return res.render('blog', {scripts: blogScript})
    })
    })
}