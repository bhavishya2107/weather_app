const cityForm = document.querySelector('form')

// const updateCity = async

cityForm.addEventListener('submit',(e) => {
    e.preventDefault()
    constCity = cityForm.city.value.trim();
    cityForm.reset();


})