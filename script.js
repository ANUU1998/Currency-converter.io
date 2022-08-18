//currency-One,currency-two,amout-one,amount-two,rate,swap
const currencyone = document.getElementById('currency-one');
const currencTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//calculate

function calculate(){
    const currOne = currencyone.value;
    const currencTwo  = currencTwo.value;

    fetch('https://api.exchangeratesapi.io/latest?base=${currOne}')
    .them(res => res.json())
    .then(data => {
        const rateE = data.rates[currTwo];

        rate.innerText = '1 ${currOne} = ${rateE} ${currTwo}';
        amountTwo.value = (amountOne.value * rateE).toFixed(2);
    })
}
currencyone.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp = currencyTwo.value;
    currencyone.value = currencTwo.value;
    currencTwo.value = temp;
    calculate();
})