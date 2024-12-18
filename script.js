function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

       if (weight > 0 && height > 0) {
        const bmi = (weight / (height/100 * height/100)).toFixed(2);
        let status = "";

        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Overweight";
        } else {
            status = "Obese";
        }
    
        document.getElementById("bmi-result").innerText = `Your BMI is ${bmi} 
        ${status}.`;

    } else {
        document.getElementById('bmi-result').innerText = "Invalid input";
    }
}
