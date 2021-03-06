const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const day = document.querySelector('.day')
const body = document.querySelector('body')
const label = document.querySelector('label')
const img = document.querySelector('.image-acc')

const updateUI = (data) => {

    const cityDetails = data.cityDetails;
    const weather = data.weather;

    details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
                        <div class="my-3">${weather.WeatherText}</div>
                        <div class="display-4 my-4">
                        <span>${weather.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                        </div>`;
    
    //update the night/day images
    const iconSrc = `assets/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc)


    let timeSrc = null
    if(weather.IsDayTime){
        timeSrc = 'assets/img/day.svg'
        day.textContent = "GOOD DAY"
        day.style.color = "darkgrey"
        day.style.fontweight = "100"
        day.style.left = "95px"
        body.style.background = "#90c5e0"
        label.style.color = "black"
        card.classList.add('animated','flip')
    } else {
        timeSrc = 'assets/img/night.svg'
        day.textContent = "Good Evening"
        day.style.left = "75px"
        body.style.background = "black"
        label.style.color = "white"
        card.classList.remove('animated','flip')
        card.classList.add('animated','flipInX')
    }
    time.setAttribute('src', timeSrc);


    //remove d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
        // card.classList.add('animated','bounceInUp')
    }

    if(img.classList.contains('d-none')){
        img.classList.remove('d-none')
    }
}


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    return {cityDetails,weather};
}

cityForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})