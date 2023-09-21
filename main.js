const areaInput = document.querySelector(".area-input-format")
const areaOutput = document.querySelector(".area-output-format")
const btnFormat = document.querySelector(".control-button-format")
const btnMinify = document.querySelector(".control-button-minify")
const btnVerify = document.querySelector(".control-button-verify")
const btnClear = document.querySelector(".control-button-clear")

btnFormat.addEventListener("click", () => {
    if (areaInput.value == "") {
        areaOutput.value = "Empty JSON"
    }
    try {
        const format = JSON.stringify(JSON.parse(areaInput.value), null, 3);
        document.querySelector(".area-output-format").style.color = "#aaaaaa";
        areaOutput.value = format;
    } catch(e) {
        const output = "Error While Parsing JSON for Formatting..Please check if JSON is Valid or NOT";
        document.querySelector(".area-output-format").style.color = "red";
        areaOutput.value = output;
    }
});

btnMinify.addEventListener("click", () => {
    if (areaInput.value == "") {
        areaOutput.value = "Empty JSON"
    }
    try {
        const minify = JSON.stringify(JSON.parse(areaInput.value));
        document.querySelector(".area-output-format").style.color = "#aaaaaa";
       areaOutput.value = minify;
    } catch(e) {
       const output = "Error While Parsing JSON for Minify..Please check if JSON is Valid or NOT";
       document.querySelector(".area-output-format").style.color = "red";
       areaOutput.value = output;
    }
});

btnVerify.addEventListener("click", () => {

if (areaInput.value == "") {
    areaOutput.value = "Empty JSON"
}
 const {isValid, msg} = IsValid(areaInput.value)
 //const res = isValid ? "Valid Json" : `InValid Json \n${msg};`
 if (isValid) {
    res = "Valid JSON";
    document.querySelector(".area-output-format").style.color = "#aaaaaa";
 } else {
    res = `InValid JSON \n${msg}`;
    document.querySelector(".area-output-format").style.color = "red";
 }
 //document.querySelector(".area-output-format").style.color = "red";
 areaOutput.value = res
 });

btnClear.addEventListener("click", () => {
 areaInput.value = [];
});

function  IsValid(str) {
    try {
    if (JSON.parse(str) == null) {
            return {isValid:false, msg:""}
    }
     var a = JSON.parse(str) 
     return {isValid:true, msg:""}
    
    } catch(e) {   
        return {isValid:false, msg:e}
    }
}
