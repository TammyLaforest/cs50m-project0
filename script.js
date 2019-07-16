const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// Variables for counting todo items
let count = 0
let checked = 0
let unchecked = 0

function newTodo() {

  // Creates List Item and appends to todo list
  let newListTodo = document.createElement('li')
  list.appendChild(newListTodo)

  // Creates an input box in li
  let newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.className = 'inputText'
  newInput.placeholder = 'type and press enter'

  // When you press enter, it creates a new LI with the words 
  newInput.addEventListener('change', saveTodo)

  newListTodo.appendChild(newInput)
}


function saveTodo(e) {

  // Removes the input box
  e.target.remove(e.target.parent)

  // Increments the count by one and posts to the page
  count++
  itemCountSpan.innerHTML = count
  unchecked = count - checked
  uncheckedCountSpan.innerHTML = unchecked

  // Creates the Li
  let savedTodo = document.createElement('li')
  savedTodo.classList.add('unchecked')
  savedTodo.classList.add('TODO_CHECKBOX', 'TODO_ITEM')

  // Get text from input
  let text = e.target.value

  // Adds input content to the new li
  let textNode = document.createTextNode(text)
  savedTodo.appendChild(textNode)
  list.appendChild(savedTodo)

  // Creates check button
  let checkButton = document.createElement('button')
  checkButton.innerHTML = 'complete'
  checkButton.classList = ('buttons')
  checkButton.classList.add('TODO_CHECKBOX')

  // Adds event listener and function to check button
  checkButton.addEventListener('click', function () {
    if (savedTodo.classList.contains('unchecked')) {
      savedTodo.style.textDecoration = 'line-through'
      checked++
      unchecked = count - checked
      uncheckedCountSpan.innerHTML = unchecked
      savedTodo.classList.remove('unchecked')
      console.log('check input')
      console.log(`number checked: ${checked}`)
      console.log(`number unchecked: ${unchecked}`)
      console.log(`count: ${count}`)
    }
    else {
      savedTodo.style.textDecoration = 'none'
      checked--
      unchecked = count - checked
      uncheckedCountSpan.innerHTML = unchecked
      savedTodo.classList.add('unchecked')
      console.log('uncheck input')
      console.log(`number checked: ${checked}`)
      console.log(`number unchecked: ${unchecked}`)
      console.log(`count: ${count}`)
    }
  })
  savedTodo.appendChild(checkButton)

  // Creates delete button
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'delete'
  deleteButton.classList = 'buttons'
  deleteButton.classList.add('TODO_DELETE')

  // Functionality of delete button
  deleteButton.addEventListener('click', function () {
    count--
    itemCountSpan.innerHTML = count
    if (!savedTodo.classList.contains('unchecked')) {
      checked--
      unchecked = count - checked
      uncheckedCountSpan.innerHTML = unchecked
    }

    unchecked = count - checked
    uncheckedCountSpan.innerHTML = unchecked
    savedTodo.remove('li')
  })
  savedTodo.appendChild(deleteButton)

}










