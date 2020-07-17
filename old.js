

// class Project {
//     constructor(projectName) {
//         this.name = projectName
//         this.todos = []
//     }
//     createToDo(title, description, dueDate, priority) {
//         const newTodo = new Todo(title, description, dueDate, priority, this.name)
//         this.addToDo(newTodo)
//         this.addToDefault(newTodo)
//     }
//     loadLocalLibary(title, description, dueDate, priority) {
//         const newTodo = new Todo(title, description, dueDate, priority, this.name)
//         this.addToDo(newTodo)
//     }
//     addToDefault (newTodo) {
//         if (this.name !== "default") {
//             projects[0].todos.push(newTodo)
//         }
//     }
//     addToDo(newTodo) {
//         this.todos.push(newTodo)
//         this.cacheDOM()
//     }

//         clearDOM() {
//             this.showcase.innerHTML = ""
//             this.createDOMS()
//         }
//          cacheDOM() {
//             this.showcase = document.querySelector(".showcase")
//             this.modal = document.querySelector(".modal")
//             this.modalTitle = document.querySelector("#title")
//             this.modalDescription = document.querySelector('#description')
//             this.modalDueDate = document.querySelector('#due-date')
//             this.modalPriority = document.querySelector('#priority')
//             this.addToDoSubmitBtn = document.querySelector('#submit')
//             this.clearDOM()
//          }
//         createDOMS() {
//             let i = 0
        
//             this.todos.forEach((todo) => {
//                 const card = document.createElement('div')
//                 const title = document.createElement('p')
//                 const expandContent = document.createElement('div')
//                 const expandBtn = document.createElement('button')
//                 const description = document.createElement('p')
//                 const dueDate = document.createElement('p')
//                 const removeBtn = document.createElement('button')
//                 const label = document.createElement('label')
//                 const checkBox = document.createElement('input')
//                 const editButton = document.createElement('button')

//                 removeBtn.classList.add('closeToDo')
//                 removeBtn.id = 'closeToDo' + i
//                 checkBox.setAttribute("type", "checkbox")
//                 checkBox.id= "completed"
//                 expandBtn.id = "expand"
//                 expandContent.id = 'expandContent'
//                 editButton.id = 'editButton'

//                 title.textContent = "Title: " + todo.title
//                 description.textContent = "Description: " + todo.description
//                 dueDate.textContent = "Due date: " + todo.dueDate 
//                 removeBtn.textContent = "x"
//                 label.textContent = "Completed: "
//                 label.htmlFor = "completed"
//                 editButton.textContent = "Edit"

//                 expandContent.appendChild(description)
//                 expandContent.appendChild(dueDate)
//                 expandContent.appendChild(editButton)


//                 card.appendChild(title)
//                 card.appendChild(removeBtn)
//                 card.appendChild(label)
//                 card.appendChild(checkBox)
//                 card.appendChild(expandBtn)
//                 card.appendChild(expandContent)


//                 if (todo.priority === "high") {
//                     card.classList.add('cardRed')
//                 } else if (todo.priority === "low") {
//                     card.classList.add('cardGreen')
//                 } else { 
//                     card.classList.add('cardMedium')
//                 }

//                 this.bindEvents(removeBtn, card, todo, expandBtn, expandContent, editButton)
//                 this.render(card)
//                 i++
//             })
//     }
//     bindEvents(removeBtn, card, todo, expandBtn, expandContent, editButton, modal) {
//         removeBtn.addEventListener("click",() => {
//                 card.remove()
    
//                 let todos = this.todos.filter((e) => e.title !== todo.title)
               
//                 this.todos = todos

//                 if (todo.projectName !== "default") {
//                     index.projects.forEach((e) => {
//                         todos = e.todos.filter((e) => e.title !== todo.title)
//                         e.todos = todos
//                     })
//                 }
//                 localStorage.setItem('projects', JSON.stringify(projects))
//         })
//         expandBtn.addEventListener("click",() => {
//             if(expandBtn.id !== "expand_active") {
//                 expandBtn.id = "expand_active"
//                 expandContent.id = "expandContent_active"
//             } else {
//                 expandBtn.id = "expand"
//                 expandContent.id = "expandContent"
//             }
//         })
//         editButton.addEventListener("click",() => {

//             this.addToDoSubmitBtn.id = "submit-ToDo"
//             const submitButton = document.querySelector("#submit-ToDo")

//             submitButton.addEventListener("click", () => {
//                 todo.title = this.modalTitle.value
//                 todo.description = this.modalDescription.value
//                 todo.dueDate = this.modalDueDate.value
//                 todo.priority = this.modalPriority.value
//                 this.modal.style.display = 'none'
//                 this.submitButton.id = "submit"
//                 // this.createDOMS()
//             })

//             this.modalTitle.value = todo.title
//             this.modalDescription.value = todo.description
//             this.modalDueDate.value = todo.dueDate
//             this.modalPriority.value = todo.priority
//             this.modal.style.display = 'block'
//         })
//     }
//     render(card) {
//         this.showcase.appendChild(card)
//         localStorage.setItem('projects', JSON.stringify(projects))
//     }
// }


// const index = (() => {
//     projects = []
//     currentProject = "default"

//     function _init () {
//         const projectsJSON = localStorage.getItem('projects')
//         if(!projectsJSON) {
//             const project = new Project("default")  
//             addProject(project)
//             localStorage.setItem('projects', JSON.stringify(projects))
//             localStorage.setItem('currentProject', JSON.stringify(currentProject))
//             render()
//         } else {
//             getLocalStorage(projectsJSON)
//             render()
//         }
//     }
    
//     function getLocalStorage (projectsJSON) {
    
//         const projectsParse = JSON.parse(projectsJSON)

//         projectsParse.forEach((e) => {
//             const newProject = new Project(e.name)  
//             addProject(newProject)
//             if (e.todos.length !== 0)
//                 e.todos.forEach((i) => { 
//                     newProject.loadLocalLibary(i.title, i.description, i.dueDate, i.priority, e.name)
//                 })
//         })


//         const currentProjectJSON = localStorage.getItem('currentProject')
//         currentProject = JSON.parse(currentProjectJSON)
//     }

//     //cache DOM
//         const addToDoBtn = document.querySelector("#addToDo")
//         const modal = document.querySelector(".modal")
//         const closeToDoBtn = document.querySelector(".closeBtn")
//         const closeProjectBtn = document.querySelector(".closeProjectBtn")
//         const addToDoSubmitBtn = document.querySelector("#submit")
//         const submitProjectBtn = document.querySelector("#submitProject")
//         const titleInput = document.querySelector('#title')
//         const descriptionInput = document.querySelector('#description')
//         const dueDateInput = document.querySelector('#due-date')
//         const priorityInput = document.querySelector('#priority')
//         const newProjectBtn = document.querySelector("#newProject")
//         const modalProject = document.querySelector(".modalProject")
//         const dropdown = document.getElementById("dropdown")
//         const removeProjectBtn = document.getElementById("removeProject")
    

//     // bindEvents
//         addToDoBtn.addEventListener("click",() => modal.style.display = 'block')
//         closeToDoBtn.addEventListener("click",() => modal.style.display = 'none')
//         window.addEventListener('click',(e) => {
//             if(e.target == modal) {
//                 this.modal.style.display = 'none'
//             } else if (e.target == modalProject) {
//                 modalProject.style.display = 'none'
//             }
//         })
//         addToDoSubmitBtn.addEventListener("click", (e) => {
//             e.preventDefault()
//             const findProject = projects.find((project) => {
//                 return project.name === currentProject
//             })
            


//             findProject.createToDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
//             saveLocalStorage()
//             modal.style.display = 'none'
//         })
//         newProjectBtn.addEventListener("click", (e) => modalProject.style.display = 'block')
//         closeProjectBtn.addEventListener("click",() => modalProject.style.display = 'none')
//         submitProjectBtn.addEventListener("click", (e) => {
//             e.preventDefault()
//             const newProject = new Project(projectTitle.value)
//             addProject(newProject)
//             projectController(newProject.name)
//             saveLocalStorage()
//             render()
//             modalProject.style.display = 'none'
//         })
//         dropdown.onchange = () => {
//             projectController(dropdown.value)
//             render()
//         }
//         removeProjectBtn.addEventListener("click", (e) =>  {
//             if (currentProject !== "default") {
//                 const findProject = projects.find((project) => project.name === currentProject)

//                 const filteredToDos = projects[0].todos.filter((e) => {
//                     e.projectName !== findProject.name
//                 })

//                 projects[0].todos = filteredToDos


//                 const projectsFiltered = projects.filter((project) => project.name !== currentProject)
//                 projects = projectsFiltered
//                 projectController(projects[0].name)
//                 saveLocalStorage()
//                 render()
//             }
//         })
//         function changeDropDown () {
//             dropdown.value = currentProject
//         }
//         function projectController (projectSelect) {
//             currentProject = projectSelect
//             localStorage.setItem('currentProject', JSON.stringify(currentProject))
//         }
//         function saveLocalStorage() {
//             localStorage.setItem('projects', JSON.stringify(projects))
//         }
//         function addProject (newProject) {
//             projects.push(newProject)
//         }
//         function clearDropDown () {
//             const length = dropdown.options.length
//             for (i = length; i >= 0; i--) {
//                 dropdown.options[i] = null;
//             }
//         }

//         function render () {

//             clearDropDown()

//             projects.forEach((project) => {
//                 const projectDropdown = document.createElement("option")
//                 projectDropdown.text = project.name
//                 dropdown.add(projectDropdown)
//             })

//             changeDropDown()

//             const findProject = projects.find((project) => {
//                 return project.name === currentProject
//             })


            
//             findProject.cacheDOM()
//         }

//         _init()

//         return {
//             projects: projects,

//         }
// })()

// function Todo(title, description, dueDate, priority, name) {
//     this.title = title
//     this.description = description
//     this.dueDate = dueDate
//     this.priority = priority
//     this.projectName = name
// }
