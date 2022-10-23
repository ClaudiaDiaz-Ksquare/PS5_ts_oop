// ==================================  Creating the cards  =================================

function createChildItem(element) {
    let child = document.createElement(element);
    return child;
}

let children = [
    createChildItem("p"),
    createChildItem("h1"),
    createChildItem("h5"),
]

let section = document.querySelector("section");

for (let i = 0; i < 6; i++) {
    section.appendChild(createChildItem("article")).setAttribute("class", `bg-sm-card-${i}`);
}

let articles = document.querySelectorAll("article");

for (let i = 0; i < articles.length; i++) {
    articles[i].appendChild(createChildItem("div")).setAttribute("class", `sm-card  card-${i}`);
}



// ==================================  Fetching the data  =================================

const fetchPromise = fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");

// For DOM Manipulation
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let cards = document.querySelectorAll(".sm-card");
// converting the cards list into an array
let arr = [...cards];

// returning the data in json format from the fetch
fetchPromise.then((response) => {
    if (!response) {
        throw new Error;
    }
    return response.json();
})
.then((data) => {
    if (!data) {
        throw new Error;
    }
    
    // Useful Functions  
    function defaultData(){
        cards.forEach(card => {
            card.innerHTML = (`<p class="md-txt">${data[arr.indexOf(card)].title} <strong>&middot&middot&middot</strong></p>
            <p class="lg-txt">${data[arr.indexOf(card)].timeframes.weekly.current}hrs</p>
            <small class="sm-txt"> Last week - ${data[arr.indexOf(card)].timeframes.weekly.previous}hrs </small>`);
        });
        weekly.setAttribute("class", "clicked");

    }
    function setStyles(clickedLink){
        switch (clickedLink) {
            case "daily":
                daily.setAttribute("class", "clicked");
                weekly.setAttribute("class", "timeframe");
                monthly.setAttribute("class", "timeframe");
                break;
            case "weekly":
                weekly.setAttribute("class", "clicked");
                daily.setAttribute("class", "timeframe");
                monthly.setAttribute("class", "timeframe");
                break;
            case "monthly":
                monthly.setAttribute("class", "clicked");
                weekly.setAttribute("class", "timeframe");
                daily.setAttribute("class", "timeframe");
                break;
        }
    }   
    defaultData();

    // entering the corresponding data to each card
    daily.addEventListener("click", () => {
        setStyles("daily");

        cards.forEach(card => {
            card.innerHTML = (`<p class="md-txt">${data[arr.indexOf(card)].title} <strong>&middot&middot&middot</strong></p>
            <p class="lg-txt">${data[arr.indexOf(card)].timeframes.daily.current}hrs</p>
            <small class="sm-txt"> Yesterday - ${data[arr.indexOf(card)].timeframes.daily.previous}hrs </small>`);
        });
    })

    weekly.addEventListener("click", () => {
        setStyles("weekly");
        defaultData();
    })

    monthly.addEventListener("click", () => {
        setStyles("monthly");

        cards.forEach(card => {
            card.innerHTML = (`<p class="md-txt">${data[arr.indexOf(card)].title} <strong>&middot&middot&middot</strong></p>
            <p class="lg-txt">${data[arr.indexOf(card)].timeframes.monthly.current}hrs</p>
            <small class="sm-txt"> Last month - ${data[arr.indexOf(card)].timeframes.monthly.previous}hrs </small>`);
        });
    })

})
.catch((err) => {
    alert("An error has ocurred, please try again");
    console.error(err);
})
    
