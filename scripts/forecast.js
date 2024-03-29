const key = 'B3HG7SKYdtiKAQDsU5R2JQAs2uz1zquB';


//get city code
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base + query);
    const data = await response.json()
    return data[0];
}

//get weather of city
const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    const response = await fetch(base + query);
    const data = await response.json()
    return data[0];
}