class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cwn2L9jqRFl878shznmNgGZbrmS6jcWhKIAQXr0b&base_currency="
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangeResult = amount*result.data[secondCurrency];
        
        return exchangeResult;
    }
}