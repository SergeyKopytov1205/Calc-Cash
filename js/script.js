// Model
let state = {
   currenCurrency: "BTC",
   BTC: 0.75,
   UAH: 0.35,
   RUB: 0.15,
   EUR: 0.65,
   USD: 0.45,
   count: 5000,
   period: 6,
   carrenType: "Standart",
   Standart: 0.1,
   Premium: 0.15
};

// View
//getObject
const isValute = document.querySelectorAll(".deposit__item");
const isSum = document.querySelector(".range-invest");
const isPeriod = document.querySelector(".range-period");
const isDeposit = document.querySelector(".deposit__select");

//useObject
const innerValute = document.querySelectorAll("#Valute");
const innerValuteProc = document.querySelector(".period__proc");
const innerSum = document.querySelectorAll("#Invest");
const innerVisualInvest = document.querySelectorAll("#visualInvest");
const innerListValute = document.querySelector('.deposit__list');
const innerListPeriod = document.querySelector('.period__list');
const innerStocs = document.querySelector('.desc__stocs-sum');
const innerStocsProc = document.querySelector('.desc__proc-info');
const innerStocsSum = document.querySelector('.visual__sum-back');
const innerVisualStock = document.querySelector('#visualStock');


function render() {

   for (let i = 0; i < innerValute.length; i++) {
      innerValute[i].innerHTML = state.currenCurrency;
   }
   for (let i = 0; i < innerListValute.children.length; i++) {
      innerListValute.children[i].classList.remove('active');
      if (innerListValute.children[i].innerHTML == state.currenCurrency) {
         innerListValute.children[i].classList.add('active');
      }
   }
   innerValuteProc.innerHTML = state[state.currenCurrency] + '% ';
   for (let i = 0; i < innerSum.length; i++) {
      innerSum[i].innerHTML = state.count;
   }
   for (let i = 0; i < innerVisualInvest.length; i++) {
      innerVisualInvest[i].style.height = state.count / 50 + 'px';
   }
   for (let i = 0; i < innerListPeriod.children.length; i++) {
      innerListPeriod.children[i].classList.remove('active');
      if (innerListPeriod.children[i].innerHTML == state.period) {
         innerListPeriod.children[i].classList.add('active');
      }
   }
   let result = Math.round(state.count * state.period * state[state.carrenType] * state[state.currenCurrency])

   innerStocs.innerHTML = result;
   innerStocsProc.innerHTML = Math.round(result / state.count * 100) + ' % ';
   innerStocsSum.innerHTML = +state.count + +result;
   innerVisualStock.style.height = result / 50 + 'px';
}


// Control
isValute.forEach((isValute) => {
   isValute.addEventListener("click", handler);
});

isSum.addEventListener("input", function (event) {
   setState({
      count: event.target.value
   });
});

isPeriod.addEventListener("input", function (event) {
   setState({
      period: event.target.value
   });
});

isDeposit.addEventListener("change", function (event) {
   setState({
      carrenType: event.target.value
   });
});


render();

function setState(changeData) {
   state = Object.assign(state, changeData);
   render();
}

function handler(event) {
   setState({
      currenCurrency: event.target.innerHTML
   });
}

function deposit(event) {
   setState({
      carrenType: event.target.innerHTML
   });
}
