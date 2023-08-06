document.getElementById('linkRedirectorForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const subdirectory = event.target.elements.subdirectory.value;
    const redirectLink = event.target.elements.redirectLink.value;
    const data = {
    subdirectory,
    redirectLink,
    };

    // Make the API call to create the redirector page
    fetch('https://redirect-backend.onrender.com/api/createRedirector', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Output the response from the server
        // Handle success or show error message to the user
      })
      .catch((error) => {
        console.error(error);
        // Show error message to the user
      })
  });