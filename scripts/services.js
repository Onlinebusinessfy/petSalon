function Service(title, price) {
    this.title = title;
    this.price = price;
}

function isValid(service) {
    let isValidTitle = true;
    let isValidPrice = true;

    if (service.title === "") {
        isValidTitle = false;
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color", "red").show();
    } else {
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
    }

    if (service.price === "") {
        isValidPrice = false;
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color", "red").show();
    } else {
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
    }

    return isValidTitle && isValidPrice;
}

function clearInputs() {
    $("#txtTitle").val("");
    $("#txtPrice").val("");
}

function register(event) {
    event.preventDefault();

    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    $("#txtTitle").removeClass("error");
    $("#txtPrice").removeClass("error");

    let inputTitle = $("#txtTitle").val().trim();
    let inputPrice = $("#txtPrice").val().trim();

    let newService = new Service(inputTitle, inputPrice);

    if (isValid(newService)) {
        console.log(newService);
        alert("The registration was successful");
        clearInputs();
        save(newService);
        displayTable2();
    }
}

function init() {
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();

    $("#btnRegister").click(register);
    $("#txtPrice").on("keypress", function (event) {
        if (event.which === 13) {
            register(event);
        }
    });
}

window.onload = function () {
    console.log("Table loaded");
    displayTable2();
};
