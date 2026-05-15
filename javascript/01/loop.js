// declara a função com dois parâmetros
function imprimeTitulo(texto, qtde){
  for(let i=0; i < qtde; i++) {
    let count = i + 1;
    let conteudo = "<h1>" + texto + " " + count  +"</h1>";
    document.write(conteudo);
  }
}
imprimeTitulo("Titulo", 2) // chama a função 
imprimeTitulo("Teste", 5)

