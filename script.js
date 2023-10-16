const apiUrl = "https://www.omdbapi.com/?t=";
const apiKey = "ab720430";

async function checkMovie(movie) {
    const response = await fetch(apiUrl + movie + `&apikey=${apiKey}`);
    var data = await response.json();
    console.log(data);
};
const movieName = prompt("Informe o nome do filme: ")

checkMovie(movieName);
