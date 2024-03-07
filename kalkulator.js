<!DOCTYPE html>
<html>
<head>
    <title>Calculator with Trigonometric Functions</title>
</head>

<body>
    <!-- HTML elements -->
    <input type="text" id="input" placeholder="Enter an angle in radians">
    <button id="calculate">Calculate</button>

    <!-- JavaScript code -->
    <script>
        // Trigonometric functions
        const sin = (angle) => Math.sin(angle);
        const cos = (angle) => Math.cos(angle);

        // Calculations
        const calculate = () => {
            const inputValue = parseFloat(document.getElementById("input").value);
            if (!isNaN(inputValue)) {
                const sinResult = sin(inputValue);
                const cosResult = cos(inputValue);

                // Update the input field with results
                document.getElementById("input").value = `sin(${inputValue}) = ${sinResult}`;
                document.getElementById("input").