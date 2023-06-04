function getRandomRestaurant() {
    let restaurants = [
        `Jim's Family Restaurant`,
        `American Burgers`,
        `Bonneville Brewery`,
        `Virgs`
    ]

    let randomIndex = Math.floor(Math.random() * restaurants.length)
    let randomRestaurant = restaurants[randomIndex]

    alert(`I recommend trying ` + randomRestaurant + ` for your next meal!`)
}

document.addEventListener(`DOMContentLoaded`, function() {
    let randomRestaurantButton = document.getElementById(`random-restaurant-button`)

    randomRestaurantButton.addEventListener(`click`, getRandomRestaurant)
})


document.addEventListener('DOMContentLoaded', function() {
    var tooele = document.getElementById('tooele');
    
    tooele.addEventListener('click', function() {
      alert('You are being redirected to the offical Tooele home page.');
    });
  });
  