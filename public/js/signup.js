
function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-signup').value.trim();
    
   const email = document.querySelector('#email-signup').value.trim();
    
    const password = document.querySelector('#password-input-signup').value.trim();
    // console.log(username),
    // console.log(password)
    
  
    if (username  && password && email) {
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
  
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);