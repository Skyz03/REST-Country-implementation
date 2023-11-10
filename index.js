// Function to fetch and display the data
async function fetchData() {
  try {
    const response = await fetch(
      "https://skyz03.github.io/Coutry-Data-API/data.json"
    );
    const data = await response.json();
    const filteredCountries = data.filter(
      (country) => country.region === "Asia"
    );

    if (Array.isArray(filteredCountries)) {
      const dataContainer = document.getElementById("data-container");

      filteredCountries.forEach((country) => {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<h2>${country.name}</h2>
                            <p>Population: ${country.population}</p>
                            <p>Capital: ${country.capital}</p>
                            <p>Region: ${country.region}</p>
                            <p>Subregion: ${country.subregion}</p>
                            <p>Alpha2 Code: ${country.alpha2Code}</p>
                            <p>Alpha3 Code: ${country.alpha3Code}</p>
                            <img src="${country.flag}" alt="${country.name} Flag">`;

        dataContainer.appendChild(countryDiv);
      });
    } else {
      console.error("Data is not in the expected format.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the fetchData function when the page loads
fetchData();
