
const container=document.querySelector('.container');
const Loginlink=document.querySelector('.SignInLink');
const Registerlink=document.querySelector('.SignUpLink');

Registerlink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
})
Loginlink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
});

const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form)
    console.log(fd);
});


const registerForm = document.querySelector('.Register form');
const loginForm = document.querySelector('.Login form'); 


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = registerForm.querySelector('input[name="Username"]').value.trim();
    const email = registerForm.querySelector('input[name="EmailAddress"]').value.trim();
    const password = registerForm.querySelector('input[name="Password"]').value.trim();
  
    if (!username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.some(user => user.username === username || user.email === email);
  
    if (userExists) {
      alert('User already exists. Please log in.');
      return;
    }
  
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful! You can now log in.');
  });
  
  // Login Logic
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = loginForm.querySelector('input[name="Username"]').value.trim();
    const password = loginForm.querySelector('input[name="Password"]').value.trim();
  
    if (!username || !password) {
      alert('Please fill in both username and password.');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      alert(`Welcome back, ${username}!`);
      window.location.href='youtube.html';
    } else {
      alert('Invalid username or password. Please try again or register.');
    }
  });
  