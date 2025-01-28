//cadastro
const form = document.getElementById('form');

let cadastrados = JSON.parse(localStorage.getItem('cadastrados')) || [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nomeTutor = document.getElementById('nomeTutor').value.trim();
  const email = document.getElementById('emailTutor').value.trim();
  const nomePet = document.getElementById('nomePet').value.trim();
  const especie = document.getElementById('especie').value.trim();
  const raca = document.getElementById('raca').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const historicoPet = document.getElementById('historicoSaude').value.trim();

  if (
    !nomeTutor ||
    !email ||
    !nomePet ||
    !especie ||
    !raca ||
    !idade ||
    !historicoPet
  ) {
    alert('Por favor, preencha todos os campos antes de enviar!');
    return;
  }

  const cadastrado = {
    nomeTutor: nomeTutor,
    email: email,
    pet: {
      nome: nomePet,
      especie: especie,
      raca: raca,
      idade: idade,
      historicoPet: historicoPet,
    },
  };

  cadastrados.push(cadastrado);

  localStorage.setItem('cadastrados', JSON.stringify(cadastrados));

  alert('Pet cadastrado com sucesso!');

  form.reset();
});
