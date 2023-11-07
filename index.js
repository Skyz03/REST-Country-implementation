// Define a map of regions to their corresponding container IDs
const regionMap = {
  All: "https://skyz03.github.io/Coutry-Data-API/data.json",
  Africa: "africa-region-data",
  Americas: "americas-region-data",
  Asia: "asia-region-data",
  Europe: "europe-region-data",
  Oceania: "oceania-region-data",
};

// Function to filter and display data by region
function displayDataByRegion(selectedRegion) {
  const dataContainer = document.getElementById("data-container");
  // dataContainer.innerHTML = ""; // Clear the previous data

  // Get the region container ID
  const regionContainerId = regionMap[selectedRegion];

  // Filter and display data in the selected region container
  data.forEach((country) => {
    if (selectedRegion === "All" || country.region === selectedRegion) {
      const countryDiv = document.createElement("div");
      countryDiv.innerHTML = `<h2>${country.name}</h2>
                <p>Population: ${country.population}</p>
                <p>Capital: ${country.capital}</p>
                <p>Region: ${country.region}</p>
                <p>Subregion: ${country.subregion}</p>
                <p>Alpha2 Code: ${country.alpha2Code}</p>
                <p>Alpha3 Code: ${country.alpha3Code}</p>
                <img src="${country.flag}" alt="${country.name} Flag">`;

      const regionDataContainer = document.getElementById(regionContainerId);
      regionDataContainer.appendChild(countryDiv);
    }
  });
}

// Add event listeners to the region tabs to switch between regions
const regionTabs = document.querySelectorAll("#region-tabs button");
regionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the "active" class from all tabs
    regionTabs.forEach((t) => t.classList.remove("active"));
    // Add the "active" class to the clicked tab
    tab.classList.add("active");
    // Get the selected region from the tab's text
    const selectedRegion = tab.textContent;
    // Display data for the selected region
    displayDataByRegion(selectedRegion);
  });
});
