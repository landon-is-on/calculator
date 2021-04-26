class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }


clear() {

}

delete() {

}

appendNumber() {

}


chooseOperation(operation){
    
}

compute() {
    
}

updataDisplay() {
    
}

}
const numberButtons = document.querySelectorAll('[data-number]')
const operstionButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-equals]')
const allClearButton = document.querySelectorAll('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
