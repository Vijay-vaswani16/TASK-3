
function getKthLargest() {
  const nums = document.getElementById("arr-input").value.split(",");
  const k = parseInt(document.getElementById("k-input").value);
  
  nums.sort((a, b) => b - a);
  document.getElementById("arr-ans").innerHTML = nums[k - 1];
}