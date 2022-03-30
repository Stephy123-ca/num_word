$(document).ready(function(){

    var form=$("#form");
    var numLimit=1000000000000;
    var numText="";

var ones={
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
}
var tens={
    10:"zero",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
}
var prefixes={
    
    2:"twenty",
    3:"thirty",
    4:"forty",
    5:"fifty",
    6:"sixty",
    7:"seventy",
    8:"eighty",
    9:"ninety",
}

var suffixes={
        1: "",
        2:"thousand",
        3:"million",
        4:"billion",
        5:"trilllion"
       
    }
    form.submit(function(e){
        e.preventDefault();
        numText="";
        var num=$("#numInput").val();
        var finalNumText=convertNum(num);
        $("#changednum").html("Converted number:" +finalNumText);

    });
    function convertNum(num){
        var absNum=Math.abs(num);

        try{
            if(num>numLimit){
                throw "Number is too big.It must be below or equal to " + numLimit + "(1 trillion)."
            
            }
        }
        catch(err){
            alert(err);
            return "ERROR";
        }

        if(num.toString().includes("-") && absNum!=0){
            numText+="negative"
        }

        numText+=fourDigitConvert(absNum);
        return numText;
    }

  /**
     * 
     * @param {Number to convert} num 
     */
   function fourDigitConvert(num){
    var currentNumText="";
    if(num == 0){
        return "";
}
if(num<1000){
    currentNumText+=threeDigitConvert(num);
    return currentNumText;
}
currentNumText+=ones[num.toString().charAt(0)];
currentNumText+=" thousand ";
    
if(num.toString().substr(1)!="000"){
    currentNumText+=threeDigitConvert(parseInt(num.toString().substr(1)));
}
return currentNumText;
    }

    /**
     * 
     * @param {Number to convert} num 
     */
    function threeDigitConvert(num){
    var currentNumText="";
    if(num == 0){
        return "";
}
if(num<100){
    currentNumText+=twoDigitConvert(num);
    return currentNumText;
}
currentNumText+=ones[num.toString().charAt(0)];
currentNumText+=" hundred and ";
    
if(num.toString().substr(1)!="00"){
    currentNumText+=twoDigitConvert(parseInt(num.toString().substr(1)));
}
return currentNumText;
    }
     /**
     * 
     * @param {Number to convert} num 
     */
    function twoDigitConvert(num){
        var currentNumText= "";

        if (num < 10){
            return ones[num];
        }
if (num in tens){
    currentNumText += tens[num];
}else{
    currentNumText += prefixes[num.toString().charAt(0)];

    if(num.toString().charAt(1)!="0"){
        currentNumText +="-" + ones[num.toString().charAt(1)];
    }
}
return currentNumText;
    } 
});