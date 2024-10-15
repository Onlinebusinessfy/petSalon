let pets=[]; //empty array


function Pet(name,age,gender,breed,service,type){
    //properties=parameter(value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.querySelector('input[name="gender"]:checked').value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputType=document.getElementById("txtType").value;

    console.log(inputName,inputAge, inputGender, inputBreed, inputService, inputType)

    //create the obj
    let newPet=new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputType);
    console.log(newPet)
    //add to array
    pets.push(newPet);
    displayTotals();
    displayRow() //displayTable()
}

function init(){
    console.log("init");
    let pet1=new Pet("Cheems", 15,"Male", "Shiba-in", "grooming", "Dog");
    let pet2=new Pet("Doge", 12,"Male", "Shiba-in", "vaccines", "Dog");
    let pet3=new Pet("Firulais", 8, "Male", "Puggle", "nails","Dog")

    pets.push(pet1,pet2,pet3)
    console.log(pets)
    displayTotals();
    displayRow() //displayTable()
}

window.onload=init;//wait to render the HTML