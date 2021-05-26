let isDeposit = document.querySelectorAll('options');
let isSumInvest = document.querySelector('.range-invest');
let isPeriodInvest = document.querySelector('.range-period');
let isDateStart = 1;




function someFunction(data) {
   console.log(data)
 }
 let isValute = document.querySelectorAll('.deposit__item');
 for (let i = 0; i < isValute.length; i++) {
    isValute[i].onclick = function () {
      data = this.getAttribute('date');
      someFunction(data);
    };
 };
