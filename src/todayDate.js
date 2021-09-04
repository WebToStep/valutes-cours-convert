import { getData } from "../src/connect.js";
const htmlDate = document.querySelector('.today-date');

export const todayDay = getData().then(async data => {
    const date =  await data.date;
    htmlDate.innerText = date;
    return date;
});
