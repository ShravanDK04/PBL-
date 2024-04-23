document.getElementById("busCardForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });
    console.log(formDataObject);
    // Here you can send the form data to the server or perform any other action
});
