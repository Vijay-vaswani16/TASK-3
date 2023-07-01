function trimAndUpperCaseStrings() {
  
  var arr = document.getElementById("sentence-input").value.split(",");
  var modifiedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let trimmedString = arr[i].trim();
    let uppercasedString = trimmedString.toUpperCase();
    modifiedArray.push(uppercasedString);
  }
  
  document.getElementById("trim_space").innerHTML = modifiedArray;
}


function pattern_find() {
  const arr=document.getElementById("sentence-input").value.split(",");
  const filteredStrings = arr.filter(str => str.includes("special"));
  document.getElementById("pattern-output").innerHTML = filteredStrings;
}