function Service(title, price) {
    this.title = title;
    this.price = price;
}

function save(service) {
    let list = read();
    list.push(service);
    let val = JSON.stringify(list);
    localStorage.setItem("services", val);
}

function read() {
    let data = localStorage.getItem("services");
    if (!data) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

function displayTable2() {
    let services = read();
    let table = `
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th>Service: </th>
                <th>Price: </th>
                <th>Action: </th>
            </tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < services.length; i++) {
        let service = services[i];
        table += `
        <tr id="${i}">
            <td>${service.title}</td> <!-- Cambiado de service.name a service.title -->
            <td>${service.price}</td>
            <td><button onclick="deleteService(${i})" class="btn btn-danger custom-btn">Delete</button></td>
        </tr>`;
    }
    table += `</tbody></table>`;
    document.getElementById("serviceTable").innerHTML = table;
}

function deleteService(index) {
    let list = read();
    list.splice(index, 1);
    localStorage.setItem("services", JSON.stringify(list));
    displayTable2();
}

document.getElementById("btnRegister").addEventListener("click", function () {
    let title = document.getElementById("txtTitle").value;
    let price = document.getElementById("txtPrice").value;

    if (title === "" || price === "") {
        if (title === "") {
            $(".titleValidationMsg").css("color", "red").show();
        }
        if (price === "") {
            $(".priceValidationMsg").css("color", "red").show();
        }
        return;
    }

    let service = new Service(title, price);

    save(service);

    alert("The registration was successful!");

    displayTable2();

    document.getElementById("txtTitle").value = "";
    document.getElementById("txtPrice").value = "";
});

window.onload = function () {
    console.log("Table loaded");
    displayTable2();
};
