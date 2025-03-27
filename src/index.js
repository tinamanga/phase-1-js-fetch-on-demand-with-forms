const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
      // Prevent the form from submitting and reloading the page
      event.preventDefault();
      
      // Get the value from the input field (the movie ID)
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
  
      // Fetch movie data by ID
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => response.json())
        .then((data) => {
          // Select the DOM elements where we will display movie info
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the DOM with the fetched movie data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);