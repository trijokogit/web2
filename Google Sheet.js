const scriptURL = 'https://script.google.com/macros/s/AKfycbzAEWTVKNBb18rVPwiEC8EGb0Tp4jh_vkUGO0o0Brj4evo-D98yX1bnFmT_48owMgzEow/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
