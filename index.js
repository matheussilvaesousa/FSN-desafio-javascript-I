const readline = require('readline')

// Base de dados a ser utilizada

const alunosDaEscola=[
    {nome: "Henrique", notas: [], cursos: [], faltas: 5},
    {nome: "Edson", notas: [], cursos: [], faltas: 2},
    {nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0},
    {nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date}], faltas: 0},
    {nome: "Carlos", notas:[], cursos:[], faltas:0},
    {nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{nomeDoCurso: "UX", dataMatricula: new Date}], faltas: 0}
]

// Implementação

function adicionarAluno(nomeFormatoString){
    /* 
        Essa função receberá em formato *string* o nome do aluno a ser criado. 
        Seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
        A função também deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
    */
}

function listarAlunos(){
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
            element.cursos.forEach((element) => {
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

function buscarAluno(nomeFormatoString){
    /*
        Por meio dessa função, poderemos pesquisar um aluno por nome na lista de aluno. 
        Deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
        Caso encontre, deverá devolver os dados do aluno.
    */
}

function matricularAluno(alunoFormatoObjeto, cursoFormatoString){
    /*
        Essa funcionalidade irá permitir cadastrar um aluno em um curso. 
        A função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
        e deverá armazenar a data do momento da matrícula.
        Lembre-se de exibir o feedback para o usuário.
    */
}

function aplicarFalta(alunoFormatoObjeto){
    /*
        Ao receber um aluno, deverá incrementar uma falta ao aluno. 
        Também deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar falta se estiver matriculado em um curso.
    */
}
    
function aplicarNota(alunoFormatoObjeto){
    /*
        Ao receber um aluno, deverá adicionar uma nota ao aluno na sua lista de notas. 
        Deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
}
   
 function aprovarAluno(alunoFormatoObjeto){
    /* 
        Ao receber um aluno cadastrado em nossa lista, dirá se o mesmo está aprovado ou não. 
        Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
        Só poderá ser aprovado se estiver matriculado em um curso.
    */
}
