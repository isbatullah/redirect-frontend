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
  
      if (response.status === 205) {
        const responseData = await response.json();
        console.info('Custom status 205 response:', responseData);
      } else if (response.ok) {
        // Handle other successful responses (e.g., 200) as before
        console.info('Regular response:', response);
      } else {
        alert('Failed to save email address. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save email address. Please try again later.');
    }
  });