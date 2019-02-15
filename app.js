// Get countries
const countriesList = document.querySelector('.countries');
let countries;

// Add event listener
countriesList.addEventListener('change', e => 
        displayInfo(e.currentTarget.value)
 );

// Get data from API
const url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
.then(res => res.json())
.then(data => getAlldata(data))
.catch(err => console.log(err));

// Get all data
function getAlldata(data) {
    countries = data;
    let output='';
    countries.forEach(country => {
        output += `<option value="${country.alpha2Code}">
                        ${country.name}
                    </option>   
                `;
    });
    countriesList.innerHTML = output;
    let randomIndex = Math.floor(Math.random() * countriesList.length);
    displayInfo(countriesList[randomIndex].value);
}

// Display Info

function displayInfo(alpha2Code) {
   const CountriesData = countries.find(country => country.alpha2Code === alpha2Code);

   // Get country name
   const countryName = document.querySelector('.country-name');
   countryName.textContent = CountriesData.name;

   // Get calling codes
   const callingCodes = document.querySelector('.calling-codes');
   callingCodes.textContent = CountriesData.callingCodes;

   // Get capital name
   const capital = document.querySelector('.capital');
   capital.textContent = CountriesData.capital;

   // Get img
   const img = document.querySelector('img');
   img.src = CountriesData.flag;
   img.alt = CountriesData.name;
   img.title = CountriesData.name;

   // Get region name
   const region = document.querySelector('.region');
   region.textContent = CountriesData.region;

   // Get population
   const population = document.querySelector('.population');
   population.textContent = 
   CountriesData.population.toLocaleString('an-us');

   // Get time zone
   const timeZone = document.querySelector('.time-zone');
   timeZone.textContent = CountriesData.timezones;

   console.log(CountriesData);
}

// Insert current day into footer

// Get footer element
const currentDate = document.querySelector('.current-date');
// Get current date
const now = new Date().getFullYear();
currentDate.textContent = now;