const personalComputerePrice = 15.678;
const playStationPrice = 123.965;
const xboxPrice = 90.2345;
const numberOfProduct = 3;
const budget = 500;
const minimumDiscountPercent = 0;
const maximumDiscountPercent = 100;

const maximumPrice = Math.max(personalComputerePrice, playStationPrice, xboxPrice);

const minimumPrice = Math.min(personalComputerePrice, playStationPrice, xboxPrice);

const totalPrice = personalComputerePrice + playStationPrice + xboxPrice;

const totalPriceInt = Math.floor(personalComputerePrice) + Math.floor(playStationPrice) + Math.floor(xboxPrice);

const totalPriceHundreds = Math.round(totalPriceInt / 100) * 100;

const isTotalPriceEven = (Math.floor(totalPrice) % 2 === 0);

const change = budget - totalPrice;

const averagePriceRound = + ((totalPrice / numberOfProduct).toFixed(2));

const randomDiscountPercent = Math.floor(Math.random() * (maximumDiscountPercent - minimumDiscountPercent + 1)) + minimumDiscountPercent;

const discountRealRound = Math.round(totalPrice * randomDiscountPercent / 100);

const saleTotalPrice = + ((totalPrice - discountRealRound).toFixed(2));

const costTotalPriceRound = Math.floor(totalPrice) / 2;

const profit = costTotalPriceRound - discountRealRound;

console.log(`Максимальна ціна: ${maximumPrice}
Мінімальна ціна: ${minimumPrice}
Вартість всіх товарів: ${totalPrice}
Вартість всіх товарів обчислена з відкиненням копійок: ${totalPriceInt}
Сума товарів округлена до сотень: ${totalPriceHundreds}
Чи є сума округлена в меншу сторону (${Math.floor(totalPrice)}) парним числом? ${isTotalPriceEven}
Решта з 500грн (без округлення, за всі товари): ${change}
Середнє значення цін округлене до другого знаку: ${averagePriceRound}
Випадкова знижка: ${randomDiscountPercent}%
Сума до оплати після знижки: ${saleTotalPrice}
Чистий прибуток: ${profit}`);
