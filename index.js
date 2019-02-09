
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

function increaseRankBy() {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}
}
