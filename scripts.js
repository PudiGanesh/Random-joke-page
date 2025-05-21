let btnEl = document.getElementById("jokeBtn");
let textEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");


function callFn() {
    let url = "https://apis.ccbp.in/jokes/random";
    let option = {
        method: "GET",
    };
    spinnerEl.classList.remove("d-none");

    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            spinnerEl.classList.add("d-none");
            let httpResponse = JSON.stringify(jsondata.value);
            textEl.textContent = httpResponse;
        });
}


btnEl.addEventListener("click", callFn);
