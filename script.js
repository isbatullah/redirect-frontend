// script.js
document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = event.target.elements.email.value;
    const data = { email };
  
    try {
      const response = await fetch('/api/storeEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.info(response)
        // Redirect to another link after successful submission
       // window.location.href = 'https://aianswer.us'; // Replace with your desired link
      } else {
        alert('Failed to save email address. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save email address. Please try again later.');
    }
  });