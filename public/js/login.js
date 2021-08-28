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


document.querySelector('#login-btn').addEventListener('submit', loginFormHandler);


