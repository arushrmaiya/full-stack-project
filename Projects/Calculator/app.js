
let op_stack = [];
let operand_stack = [];

let infix_str = "";

let postfix_str = "";

let prec_map = new Map();

prec_map.set("÷", 2);
prec_map.set("*", 2);
prec_map.set("-", 1);
prec_map.set("+", 1);

const oplist = ["+", "-", "*", "÷"];

function add(a,b){
    return parseInt(a) + parseInt(b);
}

function sub(a,b){
    return parseInt(a) - parseInt(b);
}

function mul(a,b){
    return parseInt(a) * parseInt(b);
}

function div(a,b){
    return parseInt(a) / parseInt(b);
}

function operate(a, b, op){
    switch(op){
        case "+":
            return add(a,b);
        case "-":
            return sub(a,b);
        case "*":
            return mul(a,b);
        case "÷":
            return div(a,b);
    }
}



function infix_to_postfix(){

    console.log(infix_str);
    
    for(let i = 0; i<infix_str.length;i++){
        let c = infix_str[i];
        if(c >= '0' && c <= '9'){
            postfix_str+=c;
            console.log(c);
        }
        else if(c === "-" && (i === 0 || oplist.includes(infix_str[i-1]))){
            postfix_str += infix_str[i];
            postfix_str += infix_str[i+1];
            i += 1;
            console.log(postfix_str);
        }
        else{
            while (!op_stack.empty && prec_map.get(op_stack[-1])>=prec_map.get(c)){
                postfix_str += " ";
                postfix_str += op_stack.pop();
            }
            op_stack.push(c);
            postfix_str += " ";
        }
    }

    console.log(op_stack.length);
    console.log(postfix_str);

    while(!(op_stack.length === 0)){
        postfix_str += " ";
        postfix_str += op_stack.pop();
        console.log(postfix_str);
    }

    console.log(postfix_str);
}

function evaluate_postfix(){
    const exp_array = postfix_str.split(" ");
    console.log(exp_array);
    for (let i = 0; i<exp_array.length; i++){
        if(!(oplist.includes(exp_array[i]))){
            operand_stack.push(exp_array[i]);
        }
        else{
            let b = operand_stack.pop();
            let a = operand_stack.pop();
            let res = operate(a, b, exp_array[i]);
            operand_stack.push(res);
        }
    }
    return operand_stack.pop();
}

function addNums(){
    const numDiv = document.querySelector("#nums");
    const display = document.querySelector("#display")

    for(let i = 0; i<10; i++){
        const newNum = document.createElement("div");
        newNum.classList.add("num");
        newNum.textContent = i;
        newNum.style.border = "1px solid #000000";
        newNum.style.height = "25px";
        newNum.style.width = "25px";
        newNum.style.margin = "3px";
        newNum.style.textAlign = "center";
        newNum.style.boxSizing = "border-box"
        newNum.addEventListener('click', ()=>{infix_str = infix_str + newNum.textContent; display.textContent = infix_str; console.log(infix_str)});
        numDiv.appendChild(newNum);
    }

    const listOps = document.querySelectorAll(".op");

    for(let i = 0; i<listOps.length; i++){
        if(oplist.includes(listOps[i].textContent)){
            listOps[i].addEventListener('click', ()=>{infix_str = infix_str + listOps[i].textContent; display.textContent = infix_str; console.log(infix_str)})
        }

        else if (listOps[i].textContent === "="){
            listOps[i].addEventListener('click', ()=>{
                infix_to_postfix();
                let res = evaluate_postfix();
                console.log(res);
                display.textContent = res.toString();
                infix_str = res.toString();
                postfix_str = "";
            });
        }

        else{
            listOps[i].addEventListener('click', ()=>{
                postfix_str = "";
                infix_str = "";
                op_stack = [];
                operand_stack = [];
                display.textContent = infix_str;
            })
        }
    }
}

addNums();






