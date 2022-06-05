function getOldValue() {
    return document.getElementById("old_value").innerText;
}
function printOldVale(num) {
    document.getElementById("old_value").innerText = num;
}
function getResult() {
    return document.getElementById("print_value").innerText;
}
function printResult(num) {
    if (num == "")
        document.getElementById("print_value").innerText = num;
    else
        document.getElementById("print_value").innerText = formatNumber(num);
}
function formatNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function deleteFormatNumber(num) {
    return Number(num.replace(/,/g, ''));
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        let result = deleteFormatNumber(getResult());
        if (result != NaN) {
            result += this.id;
            printResult(result);
        }
    })
}

function myEval(str) {


}

let system = document.getElementsByClassName("system");
for (let i = 0; i < system.length; i++) {
    system[i].addEventListener("click", function () {
        if (this.id == "delete_all") {
            printResult("");
            printOldVale("");
        } else if (this.id == "delete_a_number") {
            let result = deleteFormatNumber(getResult()).toString();
            if (result) {
                result = result.substr(0, result.length - 1);
                printResult(result);
            }
        } else {
            let result = getResult();
            let old_result = getOldValue();
            if (result != "") {
                result = deleteFormatNumber(result);
                old_result += result;
                if (this.id == "=") {
                    let last_result = eval(old_result);
                    printResult(last_result);
                    printOldVale("");
                } else {
                    old_result += this.id;
                    printOldVale(old_result);
                    printResult("");
                }

            }
        }
    })
}
