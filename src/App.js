import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  // State variables
  const [selectedRegion, setSelectedRegion] = useState("Asia");
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data when selected region or search term changes
  useEffect(() => {
    fetchData(selectedRegion, searchTerm);
  }, [selectedRegion, searchTerm]);

  // Function to fetch data from the API
  const fetchData = async (region, term) => {
    try {
      const response = await fetch(
        "https://skyz03.github.io/Coutry-Data-API/data.json"
      );
      const data = await response.json();

      // Filter countries based on selected region and search term
      const filteredCountries = data.filter(
        (country) =>
          country.region === region &&
          country.name.toLowerCase().includes(term.toLowerCase())
      );

      // Update state with the filtered countries
      if (Array.isArray(filteredCountries)) {
        setCountries(filteredCountries);
      } else {
        console.error("Data is not in the expected format.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Country Data</h1>

      <div className="text-center">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded mb-4 text-center"
        />

        {/* Dropdown menu for selecting regions */}
        <label htmlFor="regionSelect" className="text-lg font-semibold mb-4">
          Select a region:
        </label>
        <select
          id="regionSelect"
          onChange={(e) => setSelectedRegion(e.target.value)}
          value={selectedRegion}
          className="p-2 border rounded"
        >
          {/* Dropdown options for regions */}
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          {/* Add more options for other regions as needed */}
        </select>
      </div>

      {/* Display countries in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Individual country cards */}
        {countries.map((country) => (
          <div
            key={country.name}
            className="bg-gray-200 border border-gray-300 p-4 rounded-md text-center transition-transform hover:scale-105"
          >
            {/* Country flag */}
            <img
              src={country.flag}
              alt={`${country.name} Flag`}
              className="mb-4 mx-auto"
            />
            {/* Country information */}
            <h2 className="text-lg font-semibold">{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
