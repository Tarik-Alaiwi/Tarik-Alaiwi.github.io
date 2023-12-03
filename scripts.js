let operation = "";
let evaluated = 0;
const operations = document.querySelector(".operations-p");
const quickResult = document.querySelector(".quick-result-p");
console.log(operations.textContent);

function addOperation(num){
    operation += num.toString();
    console.log(operation);
    operations.textContent = operation;
    quickResult.textContent = eval(operation);
}

function result(){
    operation = eval(operation);
    operations.textContent = operation;
}