function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const main = document.getElementById('app')
  console.log('main', main);
  const id= main.querySelector('#nested')
  console.log('id', id)
  const className = id.querySelector('.target')
  console.log('classname', className)
  //const className = div.getElementByClassName("target")*/
  return className
}

function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = ((parseInt(rankedLists[i])) + n).toString()
    console.log(rankedLists[i].innerHTML)
  }
}

function deepestChild() {
  const main = document.getElementById('app')
  const div = main.querySelector('#grand-node')
  const 
}
