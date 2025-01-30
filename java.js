document.getElementById("myBtn").addEventListener("click", function() {
    let p1 = parseFloat(document.getElementById("input1").value);
    let p2 = parseFloat(document.getElementById("input2").value);
    
    let operation = document.getElementById("operation").value;
    
    myFunction(p1, p2, operation);
});

function myFunction(a, b, operation) {
    let result;
    
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    
    document.getElementById("demo").innerHTML = result;
}