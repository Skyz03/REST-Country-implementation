// Function to fetch and display the data
async function fetchData(region) {
  try {
    const response = await fetch(
      "https://skyz03.github.io/Coutry-Data-API/data.json"
    );
    const data = await response.json();

    const filteredCountries = data.filter(
      (country) => country.region === region
    );

    if (Array.isArray(filteredCountries)) {
      const dataContainer = document.getElementById("data-container");
      dataContainer.innerHTML = ""; // Clear previous content

      filteredCountries.forEach((country) => {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<img src="${country.flag}" alt="${country.name} Flag">
                            <h2>${country.name}</h2>
                            <p>Population: ${country.population}</p>
                            <p>Capital: ${country.capital}</p>
                            <p>Region: ${country.region}</p>`;

        dataContainer.appendChild(countryDiv);
      });
    } else {
      console.error("Data is not in the expected format.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the fetchData function with the initial region when the page loads
fetchData("Asia");
