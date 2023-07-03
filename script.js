
let counter = 0
const displayer = document.getElementById('counter-display');
displayer.textContent = counter;

const maxCountNumber = 9

const incrementCounter = () => {       
       
        if (counter <= maxCountNumber) {
                counter ++
        };

     return displayer.textContent = counter;     
 };

const decrementButton = () => {
        if (counter > 0) {
                counter--
        };

     return displayer.textContent = counter;
};

const resetCounter = () => {
        counter = 0
     return displayer.textContent = counter;
};