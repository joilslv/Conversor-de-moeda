


const convertButton = document.querySelector(".convert-button")



function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const showsValueToConvert = document.querySelector(".valor")
    const showsValueConverted = document.querySelector(".valor-convertido")
    const currencySelect = document.querySelector(".select").value
    const currencySelectTo = document.querySelector(".select-to").value
    const paragrafoEuro = document.querySelector(".europ")

    const euroToday = 5.37
    const dolarToday = 4.9
    const convertedValue = inputValue/euroToday

    showsValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" }).format(inputValue)
    /*showsValueConverted.innerHTML = new Intl.NumberFormat("ESP", {
        style: "currency",
        currency: "EUR" }).format(convertedValue)
    console.log(currencySelectTo)*/



    

    if (currencySelectTo == "euro") {
        showsValueConverted.innerHTML = new Intl.NumberFormat("ESP", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelectTo == "dolar") {
        showsValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelectTo == "real") {
        showsValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / 1)
        
    }

   

}

convertButton.addEventListener("click", convertValues)