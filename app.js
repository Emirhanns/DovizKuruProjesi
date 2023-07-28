const amountElement = document.querySelector("#amount")
const firsOption = document.querySelector("#firstExchangeOptions")
const secondOption = document.querySelector("#secondExchangeOptions")
const resultElement = document.querySelector("#result")

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    amountElement.addEventListener("input",exchance);
}

function exchance(){
    const amount = Number(amountElement.value);
    const firsOptionValue = firsOption.options[firsOption.selectedIndex].textContent;

    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
   
    currency.exchange(amount,firsOptionValue,secondOptionValue)
    .then((result)=>{
        resultElement.value=result.toFixed(2)
    })
}
