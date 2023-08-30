//display btn content in calculator screen 

function display(content){
    result.value += content
}

function allClear(){
    result.value=""
}

function exprEval(){
    try{
    result.value = eval(result.value)
    }catch{
        result.value ="invalid expression!!!"
        result.value .style.color='red'
    }
}

function removeLast(){
   result.value = result.value.slice(0,-1)
}