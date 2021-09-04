import { todayDay } from "./src/todayDate.js";
import { convertMe, reConvertMe } from "./src/convert.js";

const checkb = document.querySelectorAll('input[type=radio]'),
    ruValue = document.getElementById('rub'),
    convertedMoney = document.getElementById('converted-money'),
    convertedMoneySpan = document.getElementById('converted-money-span');



checkb.forEach(e => {
    e.addEventListener("change", function() {
        if (this.checked) {
            if (this.id === 'option-1') {
                convertedMoneySpan.textContent = 'Европейский евро (EUR)';
                if (ruValue.value) convertMe();
            } else {
                convertedMoneySpan.textContent = 'Доллар США (USD)';
                if (ruValue.value) convertMe();
            }
        }
    });
});

ruValue.addEventListener('input', () => convertMe());
convertedMoney.addEventListener('input', () => reConvertMe());
