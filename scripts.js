
//wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    //code to load API
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '659cd37619msh78c001fdebfe06cp1a7f48jsn9e0abbbaa74f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20WA', options)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#location span").innerHTML = response.current.country;
	    document.querySelector("#tempF span").innerHTML = response.current.temp_f + " °F";
	    document.querySelector("#tempC span").innerHTML = response.current.temp_c + " °C";
	    document.querySelector("#mph span").innerHTML = response.current.wind_mph + " mph";
	    document.querySelector("#kph span").innerHTML = response.current.wind_kph + " kph";
	    document.querySelector("#clouds span").innerHTML = response.current.cloud + " okta";
	    document.querySelector("#humid span").innerHTML = response.current.humidity + " g.m-3";
	    return response;
	    })
	.catch(err => console.error(err));
});