if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}

function FizzBuzz() {
    this.check = (number) => {
        if (number <= 0) {
            return 'THAT NUMBER IS NOT DIVISIBLE';
        } else if (number % 5 === 0 && number % 3 === 0) {
            return 'FizzBuzz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else {
            return number
        }
    }
}


function reload() {
    window.location.reload(true)
}

