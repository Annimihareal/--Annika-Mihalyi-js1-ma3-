const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=5061d5ea4cc049fb8f44328d123eb2ed";

const proxy = "https://noroffcors.herokuapp.com/";

const url = proxy + apiUrl;


const container = document.querySelector(".games");

async function getGames() {
    try {
        const response = await fetch(url);

        const games = await response.json();

        container.innerHTML = "";
        
        for (let i = 0; i < games.results.length; i++) {
            console.log(games.results[i]);
            if (i === 8) {
                break;    
            }     

            container.innerHTML += `<div class="games">${"Name:" + " " + games.results[i].name + "<br>" + "Rating:" + " " + games.results[i].rating + "<br>" + "Number of tags:" + " " + games.results[i].tags.length}</div>`;
        } 

    } catch (error) {
        console.log("An error occured");
        container.innerHTML = displayError("An error occured when calling the API");
    } 
} 

getGames();




