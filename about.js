console.log("hello world");

document.addEventListener('DOMContentLoaded', function() {
	var contactForm = document.getElementById('contact-form')
	var message = document.getElementById('message')
  
	contactForm.addEventListener('submit', function(event) {
	  event.preventDefault()

	  message.remove()
	contactForm.reset()
	})
  })
  

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert(`Form submitted successfully. Thank you.`)
}

window.addEventListener(`load`, function() {
	let form = document.querySelector('#contact');
	form.addEventListener('submit', handleSubmit);
	
})

function giveCompliment() {
	alert(`You have excellent taste in rubber ducks!`)
}

window.addEventListener(`load`, function() {
	let duckImage = document.getElementById(`duck-image`)
	duckImage.addEventListener(`mouseover`, giveCompliment)
})



