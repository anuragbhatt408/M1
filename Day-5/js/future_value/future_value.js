var $ = function (id) {
    return document.getElementById(id);
}

calculateClick = () => {
    let inv =  parseFloat($("investment").value);
    let rate =  parseFloat($("rate").value);
    let years =  parseInt($("years").value);
    
    if(inv < 0){
        alert("investment should be greater than 0");
    }else if(rate < 0){
        alert("rate should be greater than 0");
    }else if(years < 0){
        alert("years should be greater than 0");
    }else{
    let futureValue = inv;
    for(let index=1; index<=years; index++){
        futureValue += futureValue * rate / 100;
        console.log(futureValue.toFixed(2));

    $("future_value").value = futureValue;
    }
}
}

