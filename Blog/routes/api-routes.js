const db = require('../models')

module.exports = (app) => {
    
  
    app.get('/api/posts', (req, res) => {
      db.Post.findAll({})
      .then((dbPost) => {
        console.log(dbPost)
        // res.render('cms', {results: dbPost})
        res.json(dbPost)
        // return res.render("blog", {results: dbPost})
    })
  })

  // app.get('/api/posts/', (req, res) => {
  //   db.Post.findAll({}).then((dbPost) => {
  //     res.render('blog', {results: dbPost})
  //   }
  //   );
  // });

  // app.get('/api/posts/', (req, res) => {
  //   db.Post.findAll({}).then((dbPost) => res.render({results: dbPost}));
  // });




    app.post('/api/posts', (req, res) => {
        console.log(req.body);
        db.Post.create({
          title: req.body.title,
          body: req.body.body,
          category: req.body.category,
        }).then((dbPost) => res.json(dbPost));
      });


    // app.get('api/posts/category')
}