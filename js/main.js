const form = docume.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
   criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']

   

   const itemAtual = {
      "nome" : nome.value,
      "quantidade" : quantidade.value
   }

   criaElemento(itemAtual)

   itens.push(itemAtual)

   localStorage.setItem("item", JSON.stringify(itens))

   nome.value = ""
   quantidade.value = ""

   

})

function criaElemento(item) {
   const novoItem = document.createElement("i")
   novoItem.classList.add("item")

   const numeroItem = document.createElement("strong")
   numeroItem.innerHTML = item.quantidade   
   numeroItem.appendChild(numeroItem)

   numeroItem.innerHTML += item.nome

   
   lista.appendChild(novoItem)

   
}