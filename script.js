let jokeContainer = document.getElementById("joke");
let button = document.getElementById("btn");


let getjoke = () =>{
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(response => response.json())
    .then(data => {
        jokeContainer.textContent = data.joke;
    })

    .catch(error => {
        console.log("Error Occured:",error);
    });
};


button.addEventListener("click", getjoke);
// getjoke();