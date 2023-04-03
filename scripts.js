
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
	.then(response => console.log(response))
	.catch(err => console.error(err));
});