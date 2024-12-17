# Flatdango
Flatiron Movie Theater is open for business! 
Flatdango is a web application that allows
users to browse movies, view details, and 
purchase tickets for their favorite films.

##Features

**Movie Details**  
  View essential details of a movie, including:  
  - Poster  
  - Title  
  - Runtime  
  - Showtime  
  - Available tickets (calculated dynamically as `capacity - tickets_sold`)  

- **Buy Tickets**  
  - Click the **"Buy Ticket"** button to purchase a ticket and reduce the available ticket count in real-time.  
  - Prevent further purchases if tickets are sold out (button disabled).  

- **Dynamic Updates**  
  - DOM updates seamlessly as users interact with the app.  

## Bonus Features (Optional Enhancements):
- Browse and select from a list of all movies in the theater.
- A more polished and visually appealing user interface.
- Error handling for failed API calls.

### Getting Started
**Prerequisities**
To run this project, ensure you have the following tools installed:
- Node.js
- JSON Server

## Installation
1. **Clone the repository**:
   ```bash
   git clone git@github.com:MaryMachuma/week3-code-challenge.git

2. Navigate to the project directory:
   ```bash
   cd week3-code-challenge


3.Set up the JSON server:
Save the provided db.json file in the root directory, then run:
 ``` bash
 json-server --watch db.json  
```

4.Start the application:
Open the index.html file in your browser.

## How to Use

1. **View Movie Details**  
   - When the page loads, the first movie's details are displayed automatically.

2. **Purchase Tickets**  
   - Click the **"Buy Ticket"** button to reduce the available ticket count by one.
   - If tickets sell out, the button will be disabled, and "Sold Out" will appear.

3. **Browse All Movies (Optional)**  
   - (Bonus Feature) Add functionality to browse and select from other movies in the database.

## Future Enhancements

- **Enhanced Movie Browsing**  
  - Add a sidebar or dropdown menu to browse and select movies dynamically.

- **Search Functionality**  
  - Allow users to search for specific movies by title or genre.

- **Improved UI/UX**  
  - Add animations, responsive design, and better styling for a more engaging experience.

- **Persistent Updates**  
  - Sync ticket purchases with the server using PATCH/POST requests to update the database in real-time.

## Contributing

We welcome contributions to improve Flatdango! If you'd like to contribute, follow these steps:

1. **Fork the Repository**  
   - Click the "Fork" button at the top-right corner of this repository to create a copy in your GitHub account.

2. **Clone Your Fork**  
   - Use the following command to clone your forked repository locally:
     ```bash
     git clone <your-forked-repo-url>
     ```

3. **Create a New Branch**  
   - Create a feature branch to work on:
     ```bash
     git checkout -b feature-branch-name
     ```

4. **Make Your Changes**  
   - Implement your changes or additions to the project.

5. **Commit Your Changes**  
   - Write a meaningful commit message:
     ```bash
     git commit -m "Add: Description of feature or fix"
     ```

6. **Push to Your Branch**  
   - Push your changes to your forked repository:
     ```bash
     git push origin feature-branch-name
     ```

7. **Submit a Pull Request**  
   - Open a pull request (PR) from your branch to the main branch of this repository.  
   - Include a clear title and description of your changes.

8. **Review and Merge**  
   - Collaborators will review your pull request, provide feedback if needed, and merge it once approved

## License
This project is open-source and available under the MIT License.


