document.addEventListener('DOCMContentLoaded', (e) => {
    if (e) {
        console.log('DOM loaded!')
    }

const url = window.location.search
let postId
let updating = false 

alert('Its linked')

const bodyInput = document.getElementById('body')
const titleInput = document.getElementById('title')
const cmsForm = document.getElementById('cms')
const postCategorySelect = document.getElementById('category')

const handleFormSubmit = (e) => {
    alert('Handle Form Submit Executed')
    e.preventDefault()
    if (!titleInput.value || !bodyInput.value) {
        alert('Your post is missing some content!')
    }

    const newPost = { 
        title: titleInput.value.trim(),
        body: bodyInput.value.trim(),
        category: postCategorySelect.value,
    }
    console.log('handleFormSubmit -> newPost: ', newPost)

    submitPost(newPost)
}

cmsForm.addEventListener('submit', handleFormSubmit)


const submitPost = (post) => { 
    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success in submitting post: ', data)
        window.location.href ='/blog'
    })
    .catch((error) => {
        console.error('Error:', error)
    })
}



})