var btnFutbol = document.querySelector("#btn-futbol")
var btnBasquet = document.querySelector("#btn-basquet")
var btnHinchada = document.querySelector("#btn-hinchada")
var cardFutbol = document.querySelector(".card-futbol")
var cardBasquet = document.querySelector(".card-basquet")
var cardHinchada = document.querySelector(".card-hinchada")

var btnFutbolMenos = document.querySelector("#btn-futbol-menos")

var btnSection = document.querySelector("#section-futbol")

var modalFutbol = () => {
    cardBasquet.style.display = "none"
    cardHinchada.style.display = "none"
    btnFutbol.style.display = "none"
    btnSection.style.display = "block"
}
var cerrarModalFutbol = () => {
    cardBasquet.style.display = "block"
    cardHinchada.style.display = "block"
    btnFutbol.style.display = "block"
    btnSection.style.display = "none"
}

btnFutbol.onclick = modalFutbol
btnFutbolMenos.onclick = cerrarModalFutbol