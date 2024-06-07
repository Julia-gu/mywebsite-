const hobbiesData = [
    { name: "Baking", image: "images/bake.jpg" },
    { name: "Sking", image: "images/ski.jpg" },
    { name: "Painting", image: "images/paint.jpg" },
    { name: "Traveling", image: "images/travel.jpg" },
    { name: "Sports", image: "images/sport.jpg"  },
    { name: "Scuba Diving", image: "images/scubadive.jpg" }
];

function createHobby(hobby) {
    const hobbyElement = document.createElement("div");
    hobbyElement.classList.add("hobby");

    const imageElement = document.createElement("img");
    imageElement.src = hobby.image;
    imageElement.alt = hobby.name;

    const titleElement = document.createElement("h2");
    titleElement.textContent = hobby.name;

    hobbyElement.appendChild(imageElement);
    hobbyElement.appendChild(titleElement);

    return hobbyElement;
}

function addHobbiesToPage() {
    const hobbiesContainer = document.getElementById("hobbies");

    hobbiesData.forEach(hobby => {
        const hobbyElement = createHobby(hobby);
        hobbiesContainer.appendChild(hobbyElement);
    });
}

window.onload = addHobbiesToPage;
