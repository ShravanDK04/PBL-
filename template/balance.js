// This function fetches the card number and balance data from the server
function fetchCardData() {
    // Make an API request to your server to fetch card data (card number and balance)
    // Replace `apiEndpoint` with the actual endpoint for fetching the data
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Update the card number and balance on the page
            document.getElementById("cardNumber").textContent = data.cardNumber;
            document.getElementById("balance").textContent = `$${data.balance}`;
        })
        .catch(error => {
            console.error("Error fetching card data:", error);
        });
}

// Call the function to fetch the card data
fetchCardData();
