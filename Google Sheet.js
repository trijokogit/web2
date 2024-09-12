const scriptURL = 'https://script.google.com/macros/s/AKfycbxUq_KdpUI3WqsmjaVJyZOv_fjXtKQ7cx-_P64HtJZj6_q7g8xQMZoZVezFU6JxXf2PaQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
