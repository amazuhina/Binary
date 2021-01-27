
let button = document.querySelector('.button')

button.addEventListener ('klick', function (event) {
    let firstNumber = document.querySelector('.firstNumber')
    let ax2 = document.querySelector('.ax2')
    ax2.value = firstNumber.value 
})
