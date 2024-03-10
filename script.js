


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select")
const currencySelectTo = document.querySelector(".select-to")


function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const showsValueToConvert = document.querySelector(".valor")
    const showsValueConverted2 = document.querySelector(".valor2")
    const currencySelectTo = document.querySelector(".select-to").value
    const RealToEuroToday = 5.37
    const RealToDolarToday = 4.9

    if (currencySelectTo == "dolar") {
        showsValueConverted2.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "USD",
    }).format(inputValue / RealToDolarToday);
      } else {
        showsValueConverted2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
    }).format(inputValue / RealToEuroToday);
      }
      

    showsValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
}).format(inputValue)

    console.log(currencySelectTo)
}



function changeCurrency() {
    const currencySelectTo = document.querySelector(".select-to").value
    const currencyNameUp = document.querySelector(".currency1")
    const currencyimage = document.querySelector(".bandeira2")
    const currencyNameDown = document.querySelector(".currency2")

    if (currencySelectTo == "dolar") {
        currencyNameDown.innerHTML = "Dólar Americano"
        currencyimage.src = "/assets/_img/dolar.png"
    }
    if (currencySelectTo == "euro") {
        currencyNameDown.innerHTML = "Euro"
        currencyimage.src = "/assets/_img/euro.png"
    }
    if (currencySelectTo == "real") {
        currencyNameDown.innerHTML = "Real"
        currencyimage.src = "/assets/_img/real.png"
    }
    

}

currencySelectTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
