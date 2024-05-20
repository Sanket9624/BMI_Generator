const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';

    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Fit';
    } else {
      category = 'Overweight';
    }

    result.innerHTML = `<span>${bmi}    you are ${category}</span>`;
  }
});
