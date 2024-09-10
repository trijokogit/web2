const scriptURL = 'https://script.google.com/macros/s/AKfycbxjBLiCOIC3vKVzBlo3MMP0zFnesapoBiao21agL2z-ayHgE3YtYCcWvzCLurtPQNdZ2Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
