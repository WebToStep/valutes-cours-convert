import { getData } from "./connect.js";


const EURO = document.getElementById('option-1'),
    USD = document.getElementById('option-2'),
    ruValue = document.getElementById('rub'),
    convertedMoney = document.getElementById('converted-money');




export function convertMe() {
    // достаем евро
    const getEURO = async () => ruValue.value / await getData()
        .then(async data => await data.rates.RUB);

    // достаем Доллар
    const getUSD = async () => ruValue.value / await getData()
        .then(async data => await data.rates.RUB) *
                    await getData()
                        .then(async data => await data.rates.USD);

    if (EURO.checked) {
        getEURO()
            .then(promise => convertedMoney.value = Math.round(promise * 10000) / 10000);
    }
    if (USD.checked) {
        getUSD()
            .then(promise => convertedMoney.value = Math.round(promise * 10000) / 10000);
    }

}
export function reConvertMe() {
    // достаем евро
    const getEURO = async () => convertedMoney.value * await getData()
        .then(async data => await data.rates.RUB);

    // достаем Доллар
    const getUSD = async () => convertedMoney.value * await getData()
        .then(async data => await data.rates.RUB) /
                    await getData()
                        .then(async data => await data.rates.USD);

    if (EURO.checked) {
        getEURO()
            .then(promise => ruValue.value = Math.round(promise * 10000) / 10000);
    }
    if (USD.checked) {
        getUSD()
            .then(promise => ruValue.value = Math.round(promise * 10000) / 10000);
    }

}
