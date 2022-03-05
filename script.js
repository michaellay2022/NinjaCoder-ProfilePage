//We name it span because it is an element
//When accept, will increase number of request and decrease number of connection
var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerHTML--;
  connectionSpan.innerHTML++;
}

function ignore(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerHTML--;
}

function edit() {
  username.innerHTML = "Ninja Coder";
}
