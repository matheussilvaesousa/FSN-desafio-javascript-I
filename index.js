const readline = require('readline-sync')

// Base de dados a ser utilizada

const alunosDaEscola = [
    {nome: "Henrique", notas: [], cursos: [], faltas: 5},
    {nome: "Edson", notas: [], cursos: [], faltas: 2},
    {nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0},
    {nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date}], faltas: 0},
    {nome: "Carlos", notas:[], cursos:[], faltas:0},
    {nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{nomeDoCurso: "UX", dataMatricula: new Date}], faltas: 0}
]

// Implementação

function adicionarAluno(nomeFormatoString) {
    alunosDaEscola.push(
        {nome: nomeFormatoString, notas: [], cursos: [], faltas: 0}
    )
    console.log(`${nomeFormatoString[0].toUpperCase() + nomeFormatoString.slice(1)} foi cadastrado(a) no sistema`)
    /* 
        Essa função receberá em formato *string* o nome do aluno a ser criado. 
        Seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
        A função também deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
    */
}

function listarAlunos() {
    console.log(`\n:::::: Lista de Alunos ::::::`)
    alunosDaEscola.forEach(element => {
        console.log(`\n------------\n\nNome: ${element.nome}`)
        console.log(`Faltas: ${element.faltas}`)
        element.notas.length === 0
            ? console.log(`Notas: ainda sem notas no sistema`)
            : console.log(`Notas: ${element.notas}`)
        element.cursos.length === 0
            ? console.log(`Cursos: ainda sem matrícula em um curso`)
            : console.log(`Cursos:`)
            element.cursos.forEach(element => {
                const dataFormatada = 
                    element.dataMatricula.getDate()
                    + '-'
                    + (element.dataMatricula.getMonth() + 1)
                    + '-'
                    + element.dataMatricula.getFullYear()
                console.log(`    • ${element.nomeDoCurso}, matriculado em ${dataFormatada}`)
            })
    })
    /*
        Por meio dessa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
        Vale dizer que as informações deverão ser exibidas em um formato amigável.
    */
}

function buscarAluno(nomeFormatoString) {
    const resultadoPesquisa = alunosDaEscola.filter(
        element => element.nome.indexOf(nomeFormatoString) !== -1
    )
    resultadoPesquisa.length === 0
        ? console.log('\nNão foram encontrados alunos com esse nome')
        : console.log(`\nAlunos encontrados na pesquisa:`)
        resultadoPesquisa.forEach((element, index) => {
            console.log(
                `\n     (${index + 1}) ${element.nome}`
                + `\n        • Faltas: ${element.faltas}`
            )
            element.notas.length === 0
                ? console.log(`        • Notas: ainda sem notas no sistema`)
                : console.log(`        • Notas: ${element.notas}`)
            element.cursos.length === 0
                ? console.log(`        • Cursos: ainda sem matrícula em um curso`)
                : console.log(`        • Cursos:`)
                element.cursos.forEach(element => {
                    const dataFormatada = 
                        element.dataMatricula.getDate()
                        + '-'
                        + element.dataMatricula.getMonth()
                        + '-'
                        + element.dataMatricula.getFullYear()
                    console.log(`            • ${element.nomeDoCurso}, matriculado em ${dataFormatada}`)
                })
        })
    /*
        Por meio dessa função, pesquisaremos um aluno por nome na lista de alunos. 
        Deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
        Caso encontre, deverá devolver os dados do aluno.
    */
}

function matricularAluno(alunoFormatoObjeto, cursoFormatoString) {
    /*
        Essa funcionalidade irá permitir cadastrar um aluno em um curso. 
        A função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
        e deverá armazenar a data do momento da matrícula.
        Lembre-se de exibir o feedback para o usuário.
    */
}

function aplicarFalta(alunoFormatoObjeto) {
    /*
        Ao receber um aluno, deverá incrementar uma falta ao aluno. 
        Também deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar falta se estiver matriculado em um curso.
    */
}
    
function aplicarNota(alunoFormatoObjeto, notaAplicada) {
    /*
        Ao receber um aluno, deverá adicionar uma nota ao aluno na sua lista de notas. 
        Deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
}

function aprovarAluno(alunoFormatoObjeto) {
    alunoFormatoObjeto.faltas <= 3
    && alunoFormatoObjeto.notas.reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + currentValue / currentIndex
    }) >= 7
    && alunoFormatoObjeto.cursos.length > 0
        ? console.log(`Aluno(a) ${alunoFormatoObjeto.nome} aprovado`)
        : console.log(`Aluno(a) ${alunoFormatoObjeto.nome} reprovado`)
    /* 
        Ao receber um aluno cadastrado em nossa lista, dirá se o mesmo está aprovado ou não. 
        Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
        Só poderá ser aprovado se estiver matriculado em um curso.
    */
}
