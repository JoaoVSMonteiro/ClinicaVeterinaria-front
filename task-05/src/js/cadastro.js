//cadastro pet
const input = document.getElementById('form');

let cadastrados = [];

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const nomeTutor = document.getElementById('nome-tutor').value;
  const email = document.getElementById('email').value;

  const nomePet = document.getElementById('nome-pet').value.trim;
  const especie = document.getElementById('especie').value.trim;
  const raca = document.getElementById('raca').value.trim;
  const idade = document.getElementById('idade').value.trim;
  const historicoPet = document.getElementById('historico-saude').value.trim;

  if (
    !nomeTutor ||
    !email ||
    !nomePet ||
    !especie ||
    !raca ||
    !idade ||
    !historicoPet
  ) {
    alert('Por favor! preencha todos os campos antes de enviar!');
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
  alert('Pet cadastrado com sucesso!');
  form.reset();
});
