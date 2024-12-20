// Function to render a single film card
function renderFilm(film) {
    const card = document.createElement('div');
    card.className = "card";
    const capacityAvailable = film.capacity - film.tickets_sold;

    // Card's inner HTML with the layout
    card.innerHTML = `
        <img src="${film.poster}" alt="Film Poster" class="film-poster">
        <div class="description-button">
            <div class="description">
                <h2>${film.title}</h2>
                <h4>Showtime: ${film.showtime}</h4>
                <h4>Run time: ${film.runtime} minutes</h4>
                <span class="capacity">Available Tickets: ${capacityAvailable} seats</span>
            </div>
            <div class="button">
                <button class="book-button" ${capacityAvailable === 0 ? "disabled" : ""}>
                    ${capacityAvailable === 0 ? "Sold out" : "Buy Ticket"}
                </button>
            </div>
        </div>
    `;

    // Add the card into the container
    document.querySelector(".container").appendChild(card);

    // Add functionality to the seat button
    const bookButton = card.querySelector(".book-button");
    const capacityElement = card.querySelector(".capacity");

    bookButton.addEventListener("click", () => {
        // Check if there are seats available
        if (capacityAvailable > 0) {
            alert("You can book a seat!");

            // Update the tickets sold and capacity available
            film.tickets_sold += 1;
            const newCapacityAvailable = film.capacity - film.tickets_sold;
            capacityElement.textContent = `Available Tickets: ${newCapacityAvailable} seats`;

            // If sold out, disable the button and update its text
            if (newCapacityAvailable === 0) {
                bookButton.textContent = "Sold out";
                bookButton.disabled = true;
            }
        }
    });
}

// Function to render the film menu in ul#films
function renderFilmMenu(film) {
    const filmList = document.querySelector("#films");
    const listItem = document.createElement("li");
    listItem.className = "film item";
    listItem.textContent = film.title;

    // Highlight and display film details on click
    listItem.addEventListener("click", () => {
        document.querySelector(".container").innerHTML = ""; // Clear previous cards
        renderFilm(film); // Render only the selected film
    });

    filmList.appendChild(listItem);
}

// Function to fetch and render all films
function showAllFilms() {
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(filmData => {
            const filmList = document.querySelector("#films");
            if (filmList) {
                // Clear the existing film list
                filmList.innerHTML = "";
            }

            // Clear existing cards
            document.querySelector(".container").innerHTML = "";

            // Render films in both the menu and as cards
            filmData.forEach(film => {
                renderFilmMenu(film); // Add to film menu
                renderFilm(film); // Render film cards
            });
        })
        .catch(error => console.error('Error fetching films', error));
}

// Function to handle search functionality
function handleSearch() {
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();

        fetch('http://localhost:3000/films')
            .then(response => response.json())
            .then(films => {
                const filteredFilms = films.filter((film) =>
                    film.title.toLowerCase().includes(query)
                );

                document.querySelector(".container").innerHTML = ""; // Clear previous results

                if (filteredFilms.length === 0) {
                    document.querySelector(".container").innerHTML = `
                        <p>No films found matching "${query}"</p>`;
                } else {
                    filteredFilms.forEach((film) => renderFilm(film));
                }
            })
            .catch((error) => {
                console.error('Error fetching films', error);
                alert("An error occurred while searching.");
            });
    });
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    // Ensure the ul#films element exists
    if (!document.querySelector("#films")) {
        const filmMenu = document.createElement("ul");
        filmMenu.id = "films";
        document.body.prepend(filmMenu);
    }

    // Style the film menu to appear on the left center
    const style = document.createElement("style");
    style.textContent = `
        #films {
            position: fixed;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            list-style-type: none;
            padding: 10px;
            background-color: #f4f4f4;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            height: auto;
            max-height: 80%;
            overflow-y: auto;
        }

        .film.item {
            padding: 10px;
            margin: 5px 0;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .film.item:hover {
            background-color: #ddd;
        }
    `;
    document.head.appendChild(style);

    // Check if the required DOM elements exist, create them if not
    if (!document.querySelector(".search-bar")) {
        const searchBar = document.createElement("input");
        searchBar.className = "search-bar";
        searchBar.type = "text";
        searchBar.placeholder = "Search for a film...";
        document.body.prepend(searchBar);
    }

    if (!document.querySelector(".search-button")) {
        const searchButton = document.createElement("button");
        searchButton.className = "search-button";
        searchButton.textContent = "Search";
        document.body.prepend(searchButton);
    }

    if (!document.querySelector(".container")) {
        const container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
    }

    // Initialize the functionality
    showAllFilms();
    handleSearch();
});