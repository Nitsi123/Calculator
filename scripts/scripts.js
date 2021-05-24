let evaluation = [];
let firstexpr =[];
let lastexpr = [];
let operation = [];


function operate(first, last, operator)
{
    if(first.length === 0)
    {
        result.textContent = first.join("");
    }
    else{
        if(last.length === 0)
        {
            result.textContent = first.join("");
        }
        else{
    
            let num1 = Number(first.join(""));
            let num2 = Number(last.join(""));
            let operation = operator.pop();
            let res;
            if (operation == "+")
            {
                res = num1 + num2;
            }
            if (operation == "-")
            {
                res = num1 - num2;
            }
            if (operation == "x")
            {
                res = num1 * num2;
            }
            if (operation == "/")
            {
                if(num2 == 0)
                {
                    alert("Cannot divide by 0!");
                }
                else{
                num2 = num2.toFixed(1);
                res = num1/num2;
                }
            }
            result.textContent = res;
            firstexpr =[];
            lastexpr = [];
            operation = [];
            firstexpr = result.textContent.split("");
        }
    }
}


function makeFirstExpr(eval)
{
    if((eval>=0 && eval<=9 )|| eval === ".")
    {
        if(firstexpr.indexOf(".") == -1)
        {
            firstexpr.push(eval);
        }
        result.textContent = firstexpr.join("")
    } 
    else if(eval == "+" || eval == "-" || eval == "x" || eval == "/"){
        operation.push(eval);
    }
}

function makeLastExpr(eval){
    if((eval>=0 && eval<=9 )|| eval === ".")
    {
        if(lastexpr.indexOf(".") == -1)
        {
            lastexpr.push(eval);
        }
        result.textContent = lastexpr.join("")
    } 
    else if(eval == "+" || eval == "-" || eval == "x" || eval == "/"){
        operation.push(eval);
    }
}

function evalDisplay(value)
{
    if((value>=0 && value<=9 )|| value === ".")
    {
        if(operation.length === 0)
        {
            makeFirstExpr(value);
        }
        else if(firstexpr.length === 0  && lastexpr === 0)
        {
            while(operation.length)
            {
                operation.pop();
            }
        }
        else
        {
            if(makeFirstExpr.length === 0)
            {
                makeFirstExpr(value);
            }
            const temp = makeFirstExpr.length;
            makeLastExpr(value);
        }
    }
    else if(value == "+" || value == "-" || value == "x" || value == "/" )
    {
        if(firstexpr.length!=0 && lastexpr.length!=0)
        {
            operation.push(value);
            operate(firstexpr, lastexpr, operation)
        }
        operation.push(value);
    }
    else if(value == "=")
        {
            operate(firstexpr, lastexpr, operation)
        }
    else if(value == "Clear")
    {
        result.textContent = "0";
        firstexpr = [];
        lastexpr = [];
        operation = [];
    }
    else if(value == "Delete")
    {
        if(lastexpr.length == 0)
        {
            firstexpr.pop();
            result.textContent = firstexpr.join("");
        }
        else{
            lastexpr.pop();
            result.textContent = lastexpr.join("");
        }
    }
}

const result = document.querySelector(".result");
const buttonList = Array.from(document.querySelectorAll(".button"));
buttonList.forEach(button => {
    button.addEventListener("click", function(e)
    {
        //evalDisplay(e.target.innerText)
        const value = e.target.innerText;
        evalDisplay(value);
       
        //operate.push(e.target.innerText)
        //result.textContent = res;
    })
});

window.addEventListener('keydown', function(e)
{
    console.log(e.key);
    let value = e.key;
    if(value == "Enter")
    {
        value = "=";
    }
    if(value == "*")
    {
        value = "x";
    }
    if(value == "Backspace")
    {
        value = "Delete"
    }
    evalDisplay(value);
});

console.log(evaluation);
