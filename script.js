// script.js
document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = event.target.elements.email.value;
    const data = { email };
    console.log(email)
    console.log(data)
  
    try {
      const response = await fetch('https://redirect-backend.onrender.com/api/storeEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Read the redirect URL from local storage
        const redirectURL = localStorage.getItem('redirectURL');
        if (redirectURL) {
          window.location.href = redirectURL;
        } else {
          // If no redirect URL is set, use a default URL
          window.location.href = 'https://aianswer.us'; // Replace with your desired link
        }
      } else {
        alert('Failed to save email address. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save email address. Please try again later.');
    }
  });