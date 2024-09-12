// //variables for my shopping list 
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var trash = document.getElementsByClassName("delete");
var btndelete = document.getElementById("trash");
const myUL = document.getElementById("bold");

//For removing items with delete button
Array.prototype.slice.call(trash).forEach(function(item) {
  item.addEventListener("click", function(e) {
    e.target.parentNode.remove()
  });
})

//loop for to strikeout the list 
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", strikeout);
}

//toggle between classlist
function strikeout() {
  this.classList.toggle("done");
}

//check the length of the string entered
function inputlength() {
  return input.value.length;
}

//collect data that is inserted 
function addli() {
  var li = document.createElement("li");
  var btn = document.createElement("trash");
  btn.className = "trash";
  btn.innerHTML = "delete";
  btn.addEventListener("click", function(e) {
    e.target.parentNode.remove();
  });
  li.addEventListener("click", strikeout);
  li.innerHTML = input.value + " ";
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
}

//this will add a new list item after click 
function addListAfterClick() {
  if (inputlength() > 0) {
    addli();
  }
}

//this will add a new list item with keypress
function addListKeyPress(event) {
  if (inputlength() > 0 && event.which === 13) {
    addli();
  }
}

//this will check for the event/keypress and create new list item
input.addEventListener("keypress", addListKeyPress);

//this will check for a click event and create new list item
button.addEventListener("click", addListAfterClick);

ul.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      savaData(); 
  }
},false);