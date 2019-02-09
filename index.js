
function getFirstSelector(selector) {
  var item
  item = document.querySelector(selector)
  return item
}

function nestedTarget() {
  var item
  item = document.querySelector("#nested .target")
  return item
}

function deepestChild() {

}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');

for (var i = 0; i < list.length; i++) {
  list[i].innerHTML = (i + n).toString();
}
}
