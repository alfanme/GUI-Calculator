const firstNumber = document.querySelector("#first_numb");
const secondNumber = document.querySelector("#second_numb");
const result = document.querySelector("#result");

const operators = document.querySelectorAll("#op");
const changeOp = document.querySelector("#change_op");
const alertMassage = document.querySelector("#alert");

let usedOperator = "?";
changeOp.innerHTML = usedOperator;

let numb1 = 0;
let numb2 = 0;
let res = 0;

operators.forEach(op => {
    op.addEventListener("click", () => {
        removeClass(changeOp.innerHTML, op.innerHTML);
        usedOperator = op.innerHTML;
        changeOp.innerHTML = usedOperator;
        op.className = "chosen_op";
        operation();
    });
})

const removeClass = (current_op, new_op) => {
    if (current_op !== new_op) {
        operators.forEach(op => {
            op.classList.remove("chosen_op");
        })
    }
}

const operation = () => {
    if (usedOperator !== "?") {
        alertMassage.innerHTML = "";
    }
    if (usedOperator === "?") {
        alertMassage.innerHTML = "* Mohon pilih salah satu operator terlebih dahulu!"
    } else if (usedOperator === "+") {
        res = numb1 + numb2;
        result.value = res;
    } else if (usedOperator === "-") {
        res = numb1 - numb2;
        result.value = res;
    } else if (usedOperator === "*") {
        res = numb1 * numb2;
        result.value = res;
    } else if (usedOperator === "/") {
        res = numb1 / numb2;
        result.value = res;
    }
}

firstNumber.addEventListener("input", () => {
    numb1 = parseFloat(firstNumber.value);
    operation();
});

secondNumber.addEventListener("input", () => {
    numb2 = parseFloat(secondNumber.value);
    operation();
});

const copyright = document.querySelector("#copyright");

copyright.innerHTML = "created by Ahmad Alfan ©2020";