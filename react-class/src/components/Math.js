import React from 'react'





function Math(props) {
    var num1 = parseInt(props.num1)
    var num2 = parseInt(props.num2)
    var operator = props.operator
    
    let result
    
    
    console.log('props.num1 ='  + typeof props.num1)
    
    
    
    switch(operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = NaN;
    }



    return (
        <>
            <span style={{fontSize:result}}>{result}</span>
        </>
    )
}

export default Math
