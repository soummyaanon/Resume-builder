// Function to add a new work experience field
function addNewWeField() {
    // Create a new textarea element
    let newNode = createTextField("weField", "mt-2", "Enter here");
    let weContainer = document.querySelector(".weContainer");
    weContainer.appendChild(newNode);
}

// Function to add a new educational qualification field
function addNewAQfield() {
    // Create a new textarea element
    let newNode = createTextField("eqField", "mt-2", "Enter here");
    let aqContainer = document.querySelector(".eqContainer");
    aqContainer.appendChild(newNode);
}

// Function to create a new textarea element with specified attributes
function createTextField(className, extraClass, placeholder) {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add(className);

    if (extraClass) {
        newNode.classList.add(extraClass);
    }

    newNode.setAttribute("rows", "5");
    newNode.setAttribute("placeholder", placeholder);
    return newNode;
}

// Function to generate CV
function generateCV() {
    // Extract data from form fields
    let nameField = document.getElementById("nameField").value;
    let contactField = document.getElementById("contactField").value;
    let addressField = document.getElementById("addressField").value;
    let fbField = document.getElementById("fbField").value;
    let instaField = document.getElementById("instaField").value;
    let linkedField = document.getElementById("linkedField").value;
    let objectiveField = document.getElementById("objectiveField").value;
    let imgField = document.getElementById("imgField").files[0];

    // Update CV template with extracted data
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = contactField;
    document.getElementById("addressT").innerHTML = addressField;
    document.getElementById("fbT").href = fbField;
    document.getElementById("fbT").innerHTML = fbField;
    document.getElementById("instaT").href = instaField;
    document.getElementById("instaT").innerHTML = instaField;
    document.getElementById("linkedT").href = linkedField;
    document.getElementById("linkedT").innerHTML = linkedField;
    document.getElementById("objectiveT").innerHTML = objectiveField;

    // Update Work Experience and Educational Qualification
    updateList("weField", "weT");
    updateList("eqField", "aqT");

    // Update profile picture
    updateProfilePicture(imgField);

    // Switch between form and template
    toggleFormAndTemplate();
}

// Function to update lists (e.g., Work Experience, Educational Qualification)
function updateList(fieldClassName, listId) {
    let fields = document.getElementsByClassName(fieldClassName);
    let listItems = '';

    for (let field of fields) {
        listItems += `<li>${field.value}</li>`;
    }

    document.getElementById(listId).innerHTML = `<ul>${listItems}</ul>`;
}

// Function to update the profile picture in the template
function updateProfilePicture(imgFile) {
    let reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };
}

// Function to toggle between form and template view
function toggleFormAndTemplate() {
    let cvForm = document.getElementById("cv-form");
    let cvTemplate = document.getElementById("cv-template");

    cvForm.style.display = "none";
    cvTemplate.style.display = "block";
}

// Function to print CV
function printCV() {
    window.print();
}
