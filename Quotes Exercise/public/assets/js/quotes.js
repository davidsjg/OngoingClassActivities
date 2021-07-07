
const createQuote = document.getElementById('createQuote')
const newAuthor = document.getElementById('author')
const newQuote = document.getElementById('quote')
const submitBtn = document.getElementById('submitBtn')




//CREATE QUOTE 
if (createQuote) {
    newQuote.addEventListener('submit', (e) => {

        const newQuote = {
            author: newAuthor,
            quote: newQuote,
        }
        console.log(newQuote)

        fetch('/api/quotes', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        body: JSON.stringify(newQuote),    
        }).then((response) => {
            newAuthor.value = ''
            newQuote.value = ''
            location.reload()
        })
    })
}


//DELETE
const deleteBtn = document.getElementsByName('dltBtn') 

deleteBtn.forEach((button) => {
    button.addEventListener('click', (e) => { 
        const id = e.target.getAttribute('data-id')
        console.log('delete quote id', id)
    })

    fetch(`api/quotes/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        console.log(res)
        console.log(`Deleted ID: ${id}`)
        //reload the page
        location.reload()
    })
})
