window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
const values = {amount: 20000, years: 30, rate: 5.5};
let amountP = document.getElementById('loan-amount');
let yearsN = document.getElementById('loan-years');
let rateI = document.getElementById('loan-rate');
amountP.value = values.amount;
yearsN.value = values.years;
rateI.value = values.rate;

update();

}


function update() {
  const defVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(defVals));

}

function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = ((values.rate/100)/12);
  const n = Math.floor(values.years*12);
  return ((p*i)/(1-Math.pow((1 + i),-n))).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = `$${monthly}`
}
