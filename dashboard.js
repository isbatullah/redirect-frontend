document.getElementById('linkRedirectorForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const subdirectory = event.target.elements.subdirectory.value;
    const redirectLink = event.target.elements.redirectLink.value;
  
    try {
      const response = await fetch('https://redirect-backend.onrender.com/api/createRedirector', {
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