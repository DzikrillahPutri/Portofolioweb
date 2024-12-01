let currentValue = "";

function appendValue(value) {
    currentValue += value;
    document.getElementById("calcScreen").value = currentValue;
}

function clearScreen() {
    currentValue = "";
    document.getElementById("calcScreen").value = "";
}

function calculate() {
    try {
        currentValue = eval(currentValue);
        document.getElementById("calcScreen").value = currentValue;
    } catch {
        document.getElementById("calcScreen").value = "Error";
    }
}
