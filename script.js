function calculateResult() {
  const number = document.getElementById("number").value;
  const percentage = document.getElementById("percentage").value;

  if (number === "" || percentage === "") {
    alert("Please enter both the number and the percentage!");
    return;
  }
  
  const result = (number * percentage) / 100;
  document.getElementById("result").innerText = `Result: ${result.toFixed(2)}`;
}
