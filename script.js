


const convertButton = document.querySelector(".convert-button")
const currencySelectTo = document.querySelector(".select-to-convert")
const currencySelect = document.querySelector(".select-converted")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const showsValueToConvert = document.querySelector(".valor")
    const showsValueConverted = document.querySelector(".valor-convertido")
    console.log(showsValueConverted.value)

    const euroToday = 5.37
    const dolarToday = 4.95


    showsValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" }).format (inputValue)
    

    if (currencySelect == "euro") {
        showsValueConverted.innerHTML = new Intl.NumberFormat("ESP", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }


}

convertButton.addEventListener("click", convertValues)