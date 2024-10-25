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

function getServices(){
    let services = read(); //this fn is under storeManager
    let option="";
    for(let i=0;i<services.length;i++){
        let service=services[i];
        option+=`<option value="${service.title}">${service.title}</option>`
    }
    $("#txtService").append(option);
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

    getServices();

    $("#total-text").hide();
    
    $("#register-text").on('click',function(){
        $("#total-text").toggle();
    })

    $("#mode").on('click', function(){
        if($("body").css("background-color")=="rgb(0, 0, 0)"){
            $("body").css("color","black").css("background-color","white");
            $(this).text("dark mode");
            console.log("black bg")
        }else{
            $("body").css("color","gray").css("background-color","black");
            $(this).text("light mode");
            console.log("light bg");
        }
    });

    // $("#register-text").on('mouseover',function(){
    //     $("#total-text").slideUp("slow");
    // })
}
window.onload=init;//wait to render the HTML
