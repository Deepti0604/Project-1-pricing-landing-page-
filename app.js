const toggleBtn = document.querySelector(".toggle-btn");
let currDiv = "per-month";
toggleBtn.addEventListener("click",()=>{
    if(currDiv === "per-month"){
        currDiv = "per-year";
        document.querySelector(".per-year").style.display = "block";
        document.querySelector(".per-month").style.display = "none";
    } else {
        currDiv = "per-month";
        document.querySelector(".per-month").style.display = "block";
        document.querySelector(".per-year").style.display = "none";
    }
    console.log(currDiv);
});

/* CURRENCY CONVERTER APP CODING */

const fromAmounts = document.querySelectorAll('h1');
const toCurrencyElement = document.querySelector('.toCurrency');

const countries = [
    { code: "USD", name: "United State Doller", symbol:"$"},
    { code: "INR", name: "Indian Rupee", symbol:"₹"},
    { code: "EUR", name: "Euro", symbol:"€"},
    { code: "GBP", name: "Great British Pound", symbol:"£"},
    { code: "JPY", name: "Japanese yen", symbol:"¥"}
];

countries.forEach(country => {
    const option1 = document.createElement('option');
    option1.value = `${country.code}${country.symbol}`;
    option1.textContent = `${country.code}(${country.name})`;
    toCurrencyElement.appendChild(option1);
});

function getConversionRate(fromCurrency, toCurrency) {
    // Replace this with actual exchange rates or use a third-party API
    const exchangeRates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.75, 'JPY': 110.2 ,'INR':83.13, 'USD':1 },
        'EUR': { 'USD': 1.18, 'GBP': 0.89, 'JPY': 128.94, 'INR':90.4, 'EUR':1 },
        'GBP': { 'USD': 1.33, 'EUR': 1.12, 'JPY': 146.78, 'INR': 105.39, 'GBP':1 },
        'JPY': { 'USD': 0.0091, 'EUR': 0.0078, 'GBP': 0.0068, 'INR': 0.56, 'JPY':1 },
        'INR': { 'USD': 0.012, 'EUR': 0.011, 'GBP': 0.0095, 'JPY': 1.78, 'INR':1 }
    };

    // Check if the provided currencies are in the list
    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates[fromCurrency])) {
        return null; // Conversion rate not available
    }

    return exchangeRates[fromCurrency][toCurrency];
}


let fromCurrency = 'USD';
const getExchangeRate = () => {
    var toCurrencyVal = toCurrencyElement.value;
    var toCurrency = toCurrencyVal.slice(0,toCurrencyVal.length-1);
    var currSymbol = toCurrencyVal.substring(toCurrencyVal.length-1,toCurrencyVal.length);
    fromAmounts.forEach((val) => {
        let fAmount =  val.innerText;
        fAmount = fAmount.slice(1,fAmount.length);
        let rate = getConversionRate(fromCurrency, toCurrency);
        const convertedAmount =  Math.round((rate * fAmount)) ; 
        val.innerText = (`${currSymbol}${convertedAmount}`);
    });
    fromCurrency = toCurrency;
}


toCurrencyElement.addEventListener('change',getExchangeRate);



/*fromAmounts.forEach((val) => {
    let fAmount =  val.innerText;
    fAmount = fAmount.slice(1,fAmount.length);
    console.log(fAmount);
    const conversionRate = data.rates[toCurrency]; 
    const toCurrency = toCurrencyElement.value;
        console.log(toCurrency);
        let rate = getConversionRate(fromCurrency, toCurrency);
        
        const convertedAmount =  rate*fAmount ;  
        console.log(convertedAmount);
});  */

