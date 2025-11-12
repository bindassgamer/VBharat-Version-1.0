document.getElementById('sign-up-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-box').classList.add('hidden');
    document.getElementById('signup-box').classList.remove('hidden');
  });
  