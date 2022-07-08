const URL = 'https://restcountries.com/v2/all'
fetch(URL)
	.then(res => res.json())
	.then(data => renderData(data))
function renderData(dataArray) {
	dataArray.forEach(countries => {
		let coun = `<div class="all-countries">	<p class="country-name">
					${countries.name}
				</p>
				<img src="${countries.flag}" alt="Flag">
				<p class="capital">
					${countries.capital}
					</p></div>`
		document.querySelector('.countries').innerHTML += coun
	})
}
