function dark_mode(classeCss){ 
  console.log(classeCss);
  document.querySelector("body").setAttribute("class", classeCss);
}
// garantir que o codigo seja executado somente apos 
// a leitura completa da pagina html
window.addEventListener("load", () => {
  const button = document.querySelector("#dark");
  const button2 = document.querySelector("#white");
  // addEventListener - associa um evento a um elemento html
  button.addEventListener("click", ()=>{ 
    dark_mode('dark') 
  } )
  button2.addEventListener("click", ()=>{ 
    dark_mode('white') 
  } )
});