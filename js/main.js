const form = docume.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
   criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']

   const existe = itens.find(elemento => elemento.nome === nome.value)

   const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
   }

   if (existe) {
      itemAtual.id = existe.id

      atualizaElemento(item)

      itens[existe.id] = itemAtual
   } else {
      itemAtual.id = itens.length

      criaElemento(itemAtual)

      itens.push(itemAtual)
   }

   localStorage.setItem("item", JSON.stringify(itens))

   nome.value = ""
   quantidade.value = ""

})

function criaElemento(item) {
   const novoItem = document.createElement("i")
   novoItem.classList.add("item")
   const numeroItem = document.createElement("strong")
   numeroItem.innerHTML = item.quantidade
   numeroItem.dataset.id = item.id
   numeroItem.appendChild(numeroItem)
   numeroItem.innerHTML += item.nome
   lista.appendChild(novoItem)
}

function atualizaElemento(item) {
   document.querySelector("[data-id=" + item.id + "]").innerHTML = item.quantidade
}