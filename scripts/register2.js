let pets=[]; //empty array

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.querySelector('input[name="gender"]:checked');
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputType=document.getElementById("txtType");

function Pet(name,age,gender,breed,service,type){
    //properties=parameter(value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register() {
    // Access the values inside the function
    let inputGender = document.querySelector('input[name="gender"]:checked');
    let newPet = new Pet(
        inputName.value,
        inputAge.value,
        inputGender ? inputGender.value : '',
        inputBreed.value,
        inputService.value,
        inputType.value
    );

    if (isValid(newPet)) {
        pets.push(newPet);
        displayTotals();
        displayTable();
    }
}

function isValid(){
    let validation=true;

    if(pets.name==""){
        validation=false;
        inputName.classList.add("error");
    }
    if(pets.age==""){
        validation=false;
        inputAge.classList.add("error");
    }
    if(pets.gender==""){
        validation=false;
        inputGender.classList.add("error");
    }
    if(pets.breed==""){
        validation=false;
        inputBreed.classList.add("error");
    }
    if(pets.service==""){
        validation=false;
        inputService.classList.add("error");
    }
    if(pets.type==""){
        validation=false;
        inputType.classList.add("error");
    }

    return validation;
}

function deletePet(petId){
    console.log("Deleting pet..." + petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayTable();
    displayTotals();
}

function init(){
    console.log("init");
    let pet1=new Pet("Cheems", 15,"Male", "Shiba-in", "grooming", "Dog");
    let pet2=new Pet("Doge", 12,"Male", "Shiba-in", "vaccines", "Dog");
    let pet3=new Pet("Firulais", 8, "Male", "Puggle", "nails","Dog")

    pets.push(pet1,pet2,pet3)
    console.log(pets)
    displayTotals();
    displayTable() //displayTable()
}

window.onload=init;//wait to render the HTML
