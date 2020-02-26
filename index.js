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
        Essa função irá receber uma *string* que é nome do aluno a ser criado. 
        E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
        A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
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
        Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
        Vale dizer que As informações deverão ser exibidas em um formato amigável.
    */
}


listarAlunos()

function buscarAluno(nomeFormatoString){
    /*
        Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
        Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
        E deverá devolver um aluno em seu retorno.
    */
}

function matricularAluno(alunoFormatoObjeto, cursoFormatoString){
    /*
        Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
        Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
        e deverá armazenar a data atual no momento da matricula.
        Lembre-se de exibir o feedback para o usuário.
    */
}

function aplicarFalta(alunoFormatoObjeto){
    /*
        Ao receber um aluno devidamente cadastrado em nossa lista. 
        Você deverá incrementar uma falta ao aluno. 
        Você deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
}
    
function aplicarNota(alunoFormatoObjeto){
    /*
        Ao receber um aluno devidamente cadastrado em nossa lista. 
        Você deverá adicionar uma nota ao aluno na sua lista de notas. 
        Você deverá dar um feedback ao concluir a tarefa. 
        Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
}
   
 function aprovarAluno(alunoFormatoObjeto){
    /* 
        Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
        Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
        Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
}
