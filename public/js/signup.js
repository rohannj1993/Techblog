
function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    
    const email = document.querySelector('#email-signup').value.trim();
    
    const password = document.querySelector('#password-signup').value.trim();
    
  
    if (username && email && password) {
      const response = fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response)
    
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
    }
  
document.querySelector('#signup-btn').addEventListener('submit', signupFormHandler);