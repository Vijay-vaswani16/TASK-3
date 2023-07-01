function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function getFactorial() {
  var n = parseInt(document.getElementById("fact-input").value);
  if (n < 0) return "Factorial not possible";
  var fact = factorial(n);
  document.getElementById("fact-ans").innerHTML = fact;
}