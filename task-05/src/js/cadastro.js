const form = document.getElementById('cadastro-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const tutor = { nome, email, senha };

  let tutores = JSON.parse(localStorage.getItem('tutores')) || [];
  tutores.push(tutor);
  localStorage.setItem('tutores', JSON.stringify(tutores));

  alert('Cadastro realizado com sucesso!');
  form.reset();
});
