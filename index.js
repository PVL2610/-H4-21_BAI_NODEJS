function formatMoney(amount) {
    const num = parseFloat(amount);
    if (isNaN(num)) {
        return "Invalid input";
    }

    const integerPart = Math.floor(num).toString();
    let formattedInteger = "";

    for (let i = 0; i < integerPart.length; i++) {
        if (i > 0 && (integerPart.length - i) % 3 === 0) {
            formattedInteger += ",";
        }
        formattedInteger += integerPart[i];
    }
    return formattedInteger + " VNĐ";
}

// console.log(formatMoney("1234567.89"));
// console.log(formatMoney("211111111")); 
// console.log(formatMoney("10000000")); 


function formatMoneyWithRounding(amount, numberToRound = 0) {
    const num = parseFloat(amount);
    if (isNaN(num)) {
        return "Invalid input";
    }
    const roundingFactor = Math.pow(10, numberToRound);
    const roundedNum = Math.round(num / roundingFactor) * roundingFactor;
                        
    return formatMoney(roundedNum);
}


console.log(formatMoneyWithRounding("200502", 3)); 
