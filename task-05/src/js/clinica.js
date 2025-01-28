const listaClinicas = [];

const formCadClinica = document.getElementById('form-cad-clinica');

formCadClinica.addEventListener('submit', (e) => {
  e.preventDefault();
  cadastrarClinica();
  getClinicasLocalStorage();
});

const btnAdicionarVeterinario = document.getElementById('btn-add-veterinario');

btnAdicionarVeterinario.addEventListener('click', () => {
  const inputArea = document.getElementById('input-area');

  const newDiv = document.createElement('div');
  newDiv.className = 'form-group form-group-veterinarios';
  newDiv.innerHTML = `
        <label class="form-check-label" for="veterinarios">Nome: </label>
        <input type="text" class="form-control" id="veterinarios" />
        <label class="form-check-label" for="horario">Horário Consulta: </label>
        <input type="time" class="form-control" id="horario-fim" required />
        <button type="button" class="btn btn-danger remove-button">X</button>
      `;

  const removeButton = newDiv.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    newDiv.remove();
  });

  inputArea.appendChild(newDiv);
});

function cadastrarClinica() {
  const nomeClinica = document.getElementById('nome-clinica').value;
  const enderecoClinica = document.getElementById('endereco').value;
  const especialidadesClinica = document.getElementById('especialidades').value;

  const veterinarios = document.querySelectorAll('.form-group-veterinarios');
  const veterinariosData = [];
  veterinarios.forEach((veterinarioDiv) => {
    const nome = veterinarioDiv.querySelector('input[type="text"]').value;

    const horarioConsulta =
      veterinarioDiv.querySelector('input[type="time"]').value;

    veterinariosData.push({
      nome: nome,
      horarioConsulta: horarioConsulta,
    });
  });

  const horaInicioAtendimento = document.getElementById('horario-inicio').value;
  const horaFimAtendimento = document.getElementById('horario-fim').value;

  const conveniosClinica = document.getElementById('convenios').value;

  const clinica = {
    nome: nomeClinica,
    endereco: enderecoClinica,
    especialidades: especialidadesClinica,
    horaAtendimento: horaInicioAtendimento + '-' + horaFimAtendimento,
    convenios: conveniosClinica,
    pacientes: {
      // inserido nos processos internos, quando um paciente agenda consultas
    },
    veterinarios: veterinariosData,
  };

  adicionarNovaClinica(clinica);
}

// LOCAL STORAGE:

function postClinicasLocalStorage() {
  localStorage.setItem('clinicas', JSON.stringify(listaClinicas));
}

function adicionarNovaClinica(clinica) {
  listaClinicas.push(clinica);
  postClinicasLocalStorage();
}

function getClinicasLocalStorage() {
  const clinicasJSON = localStorage.getItem('clinicas');

  if (clinicasJSON) {
    const listaClinicasRecuperada = JSON.parse(clinicasJSON);
    console.log(listaClinicasRecuperada);
  } else {
    console.log('Nenhuma clinica foi encontrada');
  }
}
