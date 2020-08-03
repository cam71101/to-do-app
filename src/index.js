function Todo (title, description, dueDate, priority, currentProject) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.completed = false
  this.project = currentProject
  this.id = uuidv4()
}

const index = (() => {
  let todos = []
  let projects = ['default']
  let currentProject = 'default'

  function init () {
    getLocalStorage()
    if (todos != null) {
      createDOMS()
    } else {
      todos = []
      projects = ['default']
      currentProject = 'default'
    }
    renderDropdown()
  }

  // cache DOM
  const addToDoBtn = document.querySelector('#addToDo')
  const closeToDoBtn = document.querySelector('.closeBtn')
  const modal = document.querySelector('.modal')
  const titleInput = document.querySelector('#title')
  const descriptionInput = document.querySelector('#description')
  const dueDateInput = document.querySelector('#due-date')
  const priorityInput = document.querySelector('#priority')
  const showcase = document.querySelector('.showcase')
  const addToDoSubmitBtn = document.querySelector('#submit')
  const editSubmitBtn = document.querySelector('#submit-edit')
  const modalTitle = document.querySelector('#title')
  const modalDescription = document.querySelector('#description')
  const modalDueDate = document.querySelector('#due-date')
  const modalPriority = document.querySelector('#priority')
  const newProjectBtn = document.querySelector('#newProject')
  const closeProjectBtn = document.querySelector('.closeProjectBtn')
  const submitProjectBtn = document.querySelector('#submitProject')
  const modalProject = document.querySelector('.modalProject')
  const dropdown = document.getElementById('dropdown')

  // bind events
  addToDoBtn.addEventListener('click', () => (modal.style.display = 'block'))
  closeToDoBtn.addEventListener('click', () => (modal.style.display = 'none'))
  addToDoSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const todo = new Todo(
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      priorityInput.value,
      currentProject
    )
    saveToDo(todo)
    saveLocalStorage()
    clearDOM()
    createDOMS()
    modal.style.display = 'none'
  })
  newProjectBtn.addEventListener(
    'click',
    (e) => (modalProject.style.display = 'block')
  )
  closeProjectBtn.addEventListener(
    'click',
    () => (modalProject.style.display = 'none')
  )
  submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addProject(projectTitle.value)
    saveLocalStorage()
    projectController(projectTitle.value)
    renderDropdown()
    clearDOM()
    createDOMS()
    modalProject.style.display = 'none'
  })
  dropdown.onchange = () => {
    projectController(dropdown.value)
    console.log(currentProject)
    renderDropdown()
    clearDOM()
    createDOMS()
  }

  function clearDropDown () {
    const length = dropdown.options.length
    for (i = length; i >= 0; i--) {
      dropdown.options[i] = null
    }
  }

  function projectController (project) {
    currentProject = project
    saveLocalStorage()
  }
  function currentProjectDropDown () {
    dropdown.value = currentProject
  }
  function saveToDo (todo) {
    todos.push(todo)
  }
  function addProject (project) {
    projects.push(project)
  }
  function saveLocalStorage () {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('projects', JSON.stringify(projects))
    localStorage.setItem('currentProject', JSON.stringify(currentProject))
  }
  function getLocalStorage () {
    const todosJSON = localStorage.getItem('todos')
    const projectsJSON = localStorage.getItem('projects')
    const currentProjectJSON = localStorage.getItem('currentProject')

    todos = JSON.parse(todosJSON)
    projects = JSON.parse(projectsJSON)
    currentProject = JSON.parse(currentProjectJSON)
  }
  function removeToDo (todo, card) {
    card.remove()
    const removeToDo = todos.filter((e) => e.id !== todo.id)
    todos = removeToDo
    saveLocalStorage()
  }
  function expandCard (expandBtn, expandContent) {
    if (expandBtn.id !== 'expand_active') {
      expandBtn.id = 'expand_active'
      expandContent.id = 'expandContent_active'
    } else {
      expandBtn.id = 'expand'
      expandContent.id = 'expandContent'
    }
  }
  function checkboxTicked (todo) {
    const todoChecked = todos.findIndex((e) => e.id === todo.id)
    if (todos[todoChecked].completed === false) {
      todos[todoChecked].completed = true
    } else {
      todos[todoChecked].completed = false
    }
    saveLocalStorage()
  }
  function openEditModal (todo) {
    addToDoSubmitBtn.style.display = 'none'
    editSubmitBtn.style.display = 'block'
    modalTitle.value = todo.title
    modalDescription.value = todo.description
    modalDueDate.value = todo.dueDate
    modalPriority.value = todo.priority
    modal.style.display = 'block'
  }
  function clearDOM () {
    showcase.innerHTML = ''
  }
  function currentProjectDropDown () {
    dropdown.value = currentProject
  }
  function createDOMS () {
    const i = 0

    let filteredTodos = []

    if (currentProject === 'default') {
      filteredTodos = todos
    } else {
      todos.forEach((e) => {
        if (e.project === currentProject) {
          filteredTodos.push(e)
        }
      })
    }

    filteredTodos.forEach((todo) => {
      const card = document.createElement('div')
      const title = document.createElement('p')
      const expandContent = document.createElement('div')
      const expandBtn = document.createElement('button')
      const description = document.createElement('p')
      const dueDate = document.createElement('p')
      const removeBtn = document.createElement('button')
      const label = document.createElement('label')
      const checkBox = document.createElement('input')
      const editButton = document.createElement('button')

      removeBtn.classList.add('closeToDo')
      removeBtn.id = 'closeToDo' + i
      checkBox.setAttribute('type', 'checkbox')
      checkBox.id = 'completed'
      expandBtn.id = 'expand'
      expandContent.id = 'expandContent'
      editButton.id = 'editButton'

      title.textContent = 'Title: ' + todo.title
      description.textContent = 'Description: ' + todo.description
      dueDate.textContent = 'Due date: ' + todo.dueDate
      removeBtn.textContent = 'x'
      label.textContent = 'Completed: '
      label.htmlFor = 'completed'
      editButton.textContent = 'Edit'
      checkBox.checked = todo.completed

      expandContent.appendChild(description)
      expandContent.appendChild(dueDate)
      expandContent.appendChild(editButton)

      card.appendChild(title)
      card.appendChild(removeBtn)
      card.appendChild(label)
      card.appendChild(checkBox)
      card.appendChild(expandBtn)
      card.appendChild(expandContent)

      if (todo.priority === 'high') {
        card.classList.add('cardRed')
      } else if (todo.priority === 'low') {
        card.classList.add('cardGreen')
      } else {
        card.classList.add('cardMedium')
      }
      bindEvents(
        removeBtn,
        card,
        todo,
        expandBtn,
        expandContent,
        editButton,
        checkBox
      )
      render(card)
    })
    function bindEvents (
      removeBtn,
      card,
      todo,
      expandBtn,
      expandContent,
      editButton,
      checkBox
    ) {
      removeBtn.addEventListener('click', () => removeToDo(todo, card))
      expandBtn.addEventListener('click', () =>
        expandCard(expandBtn, expandContent)
      )
      checkBox.addEventListener('click', () => checkboxTicked(todo))
      editButton.addEventListener('click', () => openEditModal(todo))
      editSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const findIndexToDo = todos.findIndex((e) => e.id === todo.id)
        const findIndex = todos[findIndexToDo]

        findIndex.title = modalTitle.value
        findIndex.description = modalDescription.value
        findIndex.dueDate = modalDueDate.value
        findIndex.priority = modalPriority.value

        saveLocalStorage()
        clearDOM()
        createDOMS()

        modal.style.display = 'none'
        addToDoSubmitBtn.style.display = 'block'
        editSubmitBtn.style.display = 'none'
      })
    }
    function render (card) {
      showcase.appendChild(card)
    }
  }
  function renderDropdown () {
    clearDropDown()
    projects.forEach((project) => {
      const projectDropdown = document.createElement('option')
      projectDropdown.text = project
      dropdown.add(projectDropdown)
    })
    currentProjectDropDown()
  }

  init()
})()
