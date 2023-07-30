// settings.js
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newURL = event.target.elements.newURL.value;
  
    // Save the new URL in local storage for later use
    localStorage.setItem('redirectURL', newURL);
  
    // Show a confirmation message (optional)
    alert('URL saved successfully!');
  });