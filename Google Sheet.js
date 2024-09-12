const scriptURL = 'https://script.google.com/macros/s/AKfycby3eRgpDno6uRiJa8fElhAKuRFJlBz3sr6xDOdciK5aXgIUrk3kLLk-w9qNxgRUSpadqA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
