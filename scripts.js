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
    document.querySelector('.operations-p').classList.remove('green');
}

function result(){
    let tmp = eval(operation);
    if(Number.isInteger(tmp)){
        operation = tmp
    }else{
        operation = tmp.toFixed(2);
    }
    console.log(Number.isInteger(tmp))
    operations.textContent = operation;
    quickResult.textContent = "";
    document.querySelector('.operations-p').classList.add('green');
}

function clean(){
    operation = "";
    operations.textContent = operation;
    quickResult.textContent = operation;
    console.log(1);
    document.querySelector('.operations-p').classList.remove('green');
}

function remove(){
    operation = operations.textContent;
    operation = operation.slice(0, -1);
    operations.textContent = operation;
    quickResult.textContent = operation;
    document.querySelector('.operations-p').classList.remove('green');
}

function dot(){
    console.log(operations.textContent !== '');
    if(operations.textContent.includes('.')){
        return;
    }
    if(operations.textContent === ''){
        operation += '0.';
    }else if(operations.textContent !== '' && !operations.textContent.includes('.')){
        operation += '.';
    }
    console.log(operation);
    operations.textContent = operation;
    quickResult.textContent = eval(operation);
    document.querySelector('.operations-p').classList.remove('green');
}

function percent(){
    operation = operations.textContent;
    operation *= 0.01;
    operations.textContent = operation;
    quickResult.textContent = eval(operation);
}