

const submitBtn = document.getElementById('submitBtn')


document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }


// CREATE QUOTE 
const createQuoteBtn = document.getElementById('create-form')
if (createQuoteBtn) {
    createQuoteBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newQuote = {
        author: document.getElementById('auth').value.trim(),
        quote: document.getElementById('quo').value.trim(),
      };
      console.log(newQuote);

      // Send POST request to create a new quote
      fetch('/api/quotes', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newQuote),
      }).then((res) => {
        // Empty the form
        document.getElementsByName('quote')[0].value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new quote!');
        location.reload();
      });
    });
}

//DELETE
const deleteBtn = document.querySelectorAll('.delQuote') 

deleteBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('button clicked')
      const id = e.target.getAttribute('data-id');
      console.log('delete quote id', id);

      // Send the delete request
      fetch(`/api/quotes/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted ID: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });



 // UPDATE
 const updateQuoteBtn = document.getElementById('update-form');

 // Set up the event listener for the create button
 if (updateQuoteBtn) {
   updateQuoteBtn.addEventListener('submit', (e) => {
     e.preventDefault();

     // Grabs the id of the element that goes by the name, "id"
     const id = e.target.getAttribute('data-id');

     const updatedQuote = {
       author: document.getElementById('auth').value.trim(),
       quote: document.getElementById('quo').value.trim(),
     };
     console.log('updatedQuote', updatedQuote);

     // Send POST request to create a new quote
     fetch(`/api/quotes/${id}`, {
       method: 'PUT',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },

       // Make sure to serialize the JSON body
       body: JSON.stringify(updatedQuote),
     }).then((response) => {
       // Check that the response is all good
       // Reload the page so the user can see the new quote
       if (response.ok) {
         console.log(`Updated the quote with id: ${id}`);
         location.assign('/');
       } else {
         alert('something went wrong!');
       }
     });
   });
 }
});
