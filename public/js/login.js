function loginFormHandler(event) {
  event.preventDefault();


  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    console.log(email, password)
    fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: "test",
        password: password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

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


document.querySelector('#login-btn').addEventListener('submit', loginFormHandler);

document.querySelector('#signup-btn').addEventListener('submit', signupFormHandler);
