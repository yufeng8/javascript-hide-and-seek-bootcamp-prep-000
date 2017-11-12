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
  console.log("increase!!!")

  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankedLists.length; i++) {
    var theNumber = rankedLists[i].textContent
    rankedLists[i].innerHTML = (parseInt(theNumber) + n).toString()
    console.log(rankedLists[i].innerHTML)
  }
}

function deepestChild() {
  const main = document.getElementById('app')
  const id = main.querySelector('#grand-node')
  // const deepestChild = id.querySelector('div')
  console.log('deepestChild', deepestChild)
}
