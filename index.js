function getFirstSelector(selector) {
  console.log('aaabbbb')
  return document.querySelector(selector)
}

function nestedTargetX() {
  const main = document.getElementById('app')
  console.log('main', main);
  const id= main.querySelector('#nested')
  console.log('id', id)
  const className = id.querySelector('.target')
  console.log('classname', className)
  //const className = div.getElementByClassName("target")*/
}

function increaseRankBy(n) {

}

function deepestChild() {

}
