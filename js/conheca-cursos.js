function switchConhecaCursos(elementoMostrado){
    let cursos = document.querySelectorAll(".conheca-conteudo");
    for (curso of cursos){
        if (curso.id == elementoMostrado){
            curso.style.display = "flex";
        }else{
            curso.style.display = "none";
        }
    }
}