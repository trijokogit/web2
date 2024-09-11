const scriptURL = 'https://script.google.com/macros/s/AKfycbz4C1V8P1osIceOHa9s7GylSUShquuloJFgE3O7jYU5/dev'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
