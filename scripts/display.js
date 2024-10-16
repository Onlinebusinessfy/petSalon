function displayCards(){
    let card="";
    for(let i=0;i<pets.length;i++){
        let pet=pets[i]; //getting the current
        //creating the template
        card+=`
        <div class="pet ${pet.service}">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Type: ${pet.type}</p>
        </div>
        `;
        console.log(card);
    }
    document.getElementById("pets").innerHTML=card; //insert the card into HTML
}

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

function displayTable(){
    let row = `
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Breed</th>
                <th>Service</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    `;
    for(let i=0;i<pets.length;i++){
        let pet=pets[i];
        row+=`
        <tr id="${i}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td><button onclick="deletePet(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    }
    row += `</tbody></table>`;
    document.getElementById("petTable").innerHTML = row;
    //instead of card use row
    //row +=`<tr><tr>`
    //read about HTML tables
}
