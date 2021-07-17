module.exports = (app) => {
    app.get('/', (req, res) => 
        res.render('blog')
    )
    app.get('/cms', (req, res) => 
        res.render('cms')
    )
    app.get('/blog', (req, res) => 
        res.render('blog')
    )
    
}