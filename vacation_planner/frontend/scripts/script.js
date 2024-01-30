document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', searchDestinations);
});

async function searchDestinations() {
    const typeSelect = document.getElementById('typeSelect');
    const continentSelect = document.getElementById('continentSelect');
    const selectedType = typeSelect.value;
    const selectedContinent = continentSelect.value;

    const response = await fetch(`http://localhost:5000/api/destinations?type=${selectedType}&continent=${selectedContinent}`);
    const destinations = await response.json();

    displayDestinations(destinations);
}

function displayDestinations(destinations) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    destinations.forEach(destination => {
        const destinationElement = document.createElement('div');
        destinationElement.innerHTML = `
            <h3>${destination.Name}</h3>
            <p>Continent: ${destination.Continent}</p>
            <p>Country: ${destination.Country}</p>
            <p>Customization: ${destination.Adventure&Activities}</p>
            <p>Preferred Season: ${destination.PreferredSeason}</p>
            <p>Ratings: ${destination.Ratings}</p>
        `;
        resultsContainer.appendChild(destinationElement);
    });
}
