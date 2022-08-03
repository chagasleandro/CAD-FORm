//Cadastrar Email!

function salvarEmail(){

  const elementoInput = document.getElementById("email")
  const email = elementoInput.value

  const elementoForm = document.getElementById("contato")
  elementoForm.style.display = "none"


  const elementoMensagem = document.getElementById("mensagem")
  elementoMensagem.style.display = "block"
  elementoMensagem.innerHTML = `Sucesso! Email: ${email} Foi cadastrado!`

  console.log("Enviando para o backend...")
}