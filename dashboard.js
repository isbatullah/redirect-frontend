// settings.js
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newURL = event.target.elements.newURL.value;
  
    // Save the new URL in local storage for later use
    localStorage.setItem('redirectURL', newURL);
  
    // Show a confirmation message (optional)
    alert('URL saved successfully!');
  });


  document.getElementById('linkRedirectorForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const subdirectory = event.target.elements.subdirectory.value;
    const redirectLink = event.target.elements.redirectLink.value;
  
    try {
      const response = await fetch('/api/createRedirector', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subdirectory, redirectLink }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Confirmation message or additional data from the server
      } else {
        console.error('Failed to create redirector.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create redirector. Please try again later.');
    }
  });