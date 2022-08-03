// https://calculator.swiftutors.com/hydraulic-horsepower-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hydraulicHorsepowerRadio = document.getElementById('hydraulicHorsepowerRadio');
const headRadio = document.getElementById('headRadio');
const flowRateRadio = document.getElementById('flowRateRadio');
const specificGravityRadio = document.getElementById('specificGravityRadio');

let hydraulicHorsepower;
let head = v1;
let flowRate = v2;
let specificGravity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

hydraulicHorsepowerRadio.addEventListener('click', function() {
  variable1.textContent = 'Head (ft)';
  variable2.textContent = 'Flow Rate (gpm)';
  variable3.textContent = 'Specific Gravity';
  head = v1;
  flowRate = v2;
  specificGravity = v3;
  result.textContent = '';
});

headRadio.addEventListener('click', function() {
  variable1.textContent = 'Hydraulic Horsepower';
  variable2.textContent = 'Flow Rate (gpm)';
  variable3.textContent = 'Specific Gravity';
  hydraulicHorsepower = v1;
  flowRate = v2;
  specificGravity = v3;
  result.textContent = '';
});

flowRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Hydraulic Horsepower';
  variable2.textContent = 'Head (ft)';
  variable3.textContent = 'Specific Gravity';
  hydraulicHorsepower = v1;
  head = v2;
  specificGravity = v3;
  result.textContent = '';
});

specificGravityRadio.addEventListener('click', function() {
  variable1.textContent = 'Hydraulic Horsepower';
  variable2.textContent = 'Head (ft)';
  variable3.textContent = 'Flow Rate (gpm)';
  hydraulicHorsepower = v1;
  head = v2;
  flowRate = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hydraulicHorsepowerRadio.checked)
    result.textContent = `Hydraulic Horsepower = ${computeHydraulicHorsepower().toFixed(2)}`;

  else if(headRadio.checked)
    result.textContent = `Head = ${computeHead().toFixed(2)} ft`;

  else if(flowRateRadio.checked)
    result.textContent = `Flow Rate = ${computeFlowRate().toFixed(2)} gpm`;

  else if(specificGravityRadio.checked)
    result.textContent = `Specific Gravity = ${computeSpecificGravity().toFixed(2)}`;
})

// calculation

function computeHydraulicHorsepower() {
  return (Number(head.value) * Number(flowRate.value) * Number(specificGravity.value)) / 3960;
}

function computeHead() {
  return (Number(hydraulicHorsepower.value) * 3960) / (Number(flowRate.value) * Number(specificGravity.value));
}

function computeFlowRate() {
  return (Number(hydraulicHorsepower.value) * 3960) / (Number(head.value) * Number(specificGravity.value));
}

function computeSpecificGravity() {
  return (Number(hydraulicHorsepower.value) * 3960) / (Number(head.value) * Number(flowRate.value));
}