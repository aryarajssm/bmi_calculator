// const height = parseInt(document.querySelector('#height').value);
//this above code give empty value


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // not submit on server
    const height = parseInt(document.querySelector('#height').value); // converting string into integer
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height ${height}`;
        console.log(height);
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight ${weight}`;
        console.log(weight);
    } else {
        const bmi= (weight / ((height / 100) ** 2)).toFixed(2); // 2 for up to two decimal points
      //  results.innerHTML = `Your BMI value is:${bmi}`;
        if(bmi < 18.6){
            results.innerHTML=`Your BMI value is : ${bmi} and it is  underweight`;
        }
        else if(bmi>=18.6  && bmi < 24.9){
            results.innerHTML=`Your BMI value is : ${bmi} and it is in normal range`;;
        }
        else if(bmi>24.9){
            results.innerHTML=`Your BMI value is : ${bmi} and it is overweight`;
        }
    }
});
