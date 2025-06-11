document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');
    const clearBtn = document.getElementById('clear-btn');

    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;

        if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
            resultDiv.innerHTML = 'Please enter valid values for age, height, and weight.';
            resultDiv.style.display = 'block';
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiValue = bmi.toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultDiv.innerHTML = `Your BMI is <strong>${bmiValue}</strong>.<br>This is considered <strong>${category}</strong>.`;
        resultDiv.style.display = 'block';
    });

    clearBtn.addEventListener('click', () => {
        bmiForm.reset();
        resultDiv.innerHTML = '';
        resultDiv.style.display = 'none';
    });
});
