// function accepts variable number of arguments, check if there are any duplicates

var areThereDuplicacteArguments = (...arguments)=>{

    if( [...(new Set(arguments))].toString() !== [...arguments].toString()){
        return "duplicate arguments !!";
    }
    return "Great ! No duplicate arguments.";
}

areThereDuplicacteArguments(1,3,5);