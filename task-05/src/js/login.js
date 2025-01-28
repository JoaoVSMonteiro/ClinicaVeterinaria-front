document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    let tutores = JSON.parse(localStorage.getItem('tutores')) || [];

    const tutor = tutores.find((t) => t.email === email && t.senha === senha);

    if (tutor) {
      alert(`Bem-vindo, ${tutor.nome}!`);
      window.location.href = 'homeTutor.html';
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
  });
