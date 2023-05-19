function getBig() {
  document.getElementById("inputText").style.fontSize = "24pt";
}
function fancify() {
  document.getElementById("inputText").style.fontWeight = "bold";
  document.getElementById("inputText").style.color = "blue";
  document.getElementById("inputText").style.textDecoration = "underline";
}
function borify() {
  document.getElementById("inputText").style.fontWeight = "normal";
  document.getElementById("inputText").style.color = "black";
  document.getElementById("inputText").style.textDecoration = "none";
}
function moo() {
  document.getElementById("inputText").style.textTransform = "uppercase";
  const text = document.getElementById("inputText").value;
  const words = text.split(".");
  for (var i = 0; i < words.length-1; i++) {
    let word = words[i].trim();
    word += "-Moo ";
    words[i] = word;
  }
  document.getElementById("inputText").value = words.join("");
}
