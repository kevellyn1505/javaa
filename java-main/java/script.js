// Estrutura de dados para armazenar os alunos
let alunos = [];

function cadastrarAluno() {
    // Obtém os valores dos campos de cadastro
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    let nascimento = document.getElementById('nascimento').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;

    // Cria um objeto aluno com as informações
    let aluno = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        nascimento: nascimento,
        endereco: {
            rua: rua,
            numero: numero,
            bairro: bairro
        }
    };

    // Adiciona o aluno à lista de alunos
    alunos.push(aluno);

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();

    alert("Aluno cadastrado com sucesso!");
}

function consultarAluno() {
    // Obtém o CPF para consulta
    let cpfConsulta = document.getElementById('consultaCPF').value;

    // Procura o aluno na lista de alunos pelo CPF
    let alunoEncontrado = alunos.find(aluno => aluno.cpf === cpfConsulta);

    // Exibe o resultado da consulta na página
    if (alunoEncontrado) {
        document.getElementById('resultadoConsulta').innerHTML = `
            <h2>Aluno Encontrado:</h2>
            <p><strong>Nome:</strong> ${alunoEncontrado.nome}</p>
            <p><strong>CPF:</strong> ${alunoEncontrado.cpf}</p>
            <p><strong>Telefone:</strong> ${alunoEncontrado.telefone}</p>
            <p><strong>Nascimento:</strong> ${alunoEncontrado.nascimento}</p>
            <p><strong>Endereço:</strong> ${alunoEncontrado.endereco.rua}, ${alunoEncontrado.endereco.numero} - ${alunoEncontrado.endereco.bairro}</p>
        `;
    } else {
        document.getElementById('resultadoConsulta').innerHTML = "<p>Aluno não encontrado.</p>";
    }
}
