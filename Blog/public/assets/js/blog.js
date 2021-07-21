// const getPosts = (category) => {
//     let categoryString = category || '';
//     if (categoryString) {
//       categoryString = categoryString.replace(' ', '');
//       categoryString = `category/${categoryString}`;
//     }

//     fetch(`/api/posts/${categoryString}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success in getting posts:', data);
//         posts = data;

//         if (!posts.length) {
//           blogDisp.textContent="No blogs to display....yet"
//         } else {
//           res.render('blog', {results: data})
//         }
//       })
//       .catch((error) => console.error('Error:', error));
//   };



