const form = docume.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

})

function criaElemento(nome, quantidade) {
   const novoItem = document.createElement("i")
   novoItem.classList.add("item")

   const numeroItem = document.createElement("strong")
   numeroItem.innerHTML = quantidade
   
   numeroItem.appendChild(numeroItem)
   numeroItem.innerHTML += nome

   const lista = document.getElementById("lista")
   lista.appendChild(novoItem)
}