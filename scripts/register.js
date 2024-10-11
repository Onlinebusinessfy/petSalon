console.log("register.js")
let pets = []; // Empty array

// Create pets
let pet1 = {
    name: "Cheems",
    age: 13,
    gender: "Male",
    service: "Hair cut",
    breed: "Shiba-in",
    image: "./Cheems acostado.jfif"
};
let pet2 = {
    name: "Doge",
    age: 15,
    gender: "Male",
    service: "Nail cutting",
    breed: "Shiba-in",
    image: "./Doge.jpg"
};
let pet3 = {
    name: "Firulais",
    age: 8,
    gender: "Male",
    service: "Wash",
    breed: "Puggle",
    image: "./Firulais.jpg"
};

pets.push(pet1, pet2, pet3);

function displayNames() {
    document.getElementById("result").innerHTML = '';
    
    let petHTML = '';
    for (let i = 0; i < pets.length; i++) {
        petHTML += `
        <div class="display-item">
            <img src="${pets[i].image}" alt="${pets[i].name}">
            <p>${pets[i].name}</p>
            <p>Age: ${pets[i].age}</p>
            <p>${pets[i].gender}</p>
            <p>Service: ${pets[i].service}</p>
            <p>Breed: ${pets[i].breed}</p>
        </div>`;
    }

    document.getElementById("result").innerHTML = `<div class="display-container">${petHTML}</div>`;
}

function calculateAverageAge() {
    let totalAge = 0;
    for (let i = 0; i < pets.length; i++) {
        totalAge += pets[i].age;
    }
    
    let averageAge = totalAge / pets.length;
    
    console.log(`The average age of the dogs is: ${averageAge.toFixed(2)} years`);

    document.getElementById("average").innerHTML = `Average age: ${averageAge.toFixed(2)} years`;
}


