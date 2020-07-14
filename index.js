class Project {
    constructor(projectName) {
        this.name = projectName
        this.todos = []
    }
    createToDo(title, description, dueDate, priority) {
        const newTodo = new Todo(title, description, dueDate, priority, this.name)
        this.addToDo(newTodo)
    }
    addToDo(newTodo) {
        this.todos.push(newTodo)
        this.cacheDOM()
        if (this.name !== "default") {
            projects[0].todos.push(newTodo)
        }
    }
    clearDOM() {
        this.showcase.innerHTML = ""
        this.createDOMS()
    }
    cacheDOM() {
        this.showcase = document.querySelector(".showcase")
        this.clearDOM()
    }
    createDOMS() {
        let i = 0
        this.todos.forEach((todo) => {
            const card = document.createElement('div')
            const title = document.createElement('p')
            const expandContent = document.createElement('div')
            const expandBtn = document.createElement('button')
            const description = document.createElement('p')
            const dueDate = document.createElement('p')
            const removeBtn = document.createElement('button')
            const label = document.createElement('label')
            const checkBox = document.createElement('input')
     

            removeBtn.classList.add('closeToDo')
            removeBtn.id = 'closeToDo' + i
            checkBox.setAttribute("type", "checkbox")
            checkBox.id= "completed"
            expandBtn.id = "expand"
            expandContent.id = 'expandContent'
        

            title.textContent = todo.title
            description.textContent = todo.description
            dueDate.textContent = "Due date: " + todo.dueDate 
            removeBtn.textContent = "x"
            label.textContent = "Completed: "
            label.htmlFor = "completed"

            expandContent.appendChild(description)
            expandContent.appendChild(dueDate)

            card.appendChild(title)
            card.appendChild(removeBtn)
            card.appendChild(label)
            card.appendChild(checkBox)
            card.appendChild(expandBtn)
            card.appendChild(expandContent)

            console.log(card)

            if (todo.priority === "high") {
                card.classList.add('cardRed')
            } else if (todo.priority === "low") {
                card.classList.add('cardGreen')
            } else { 
                card.classList.add('cardMedium')
            }
            this.bindEvents(removeBtn, card, todo, expandBtn, expandContent)
            this.render(card)
            i++
        })
    }
    bindEvents(removeBtn, card, todo, expandBtn, expandContent) {
        removeBtn.addEventListener("click",() => {
                card.remove()
                

                let todos = this.todos.filter((e) => e.title !== todo.title)
               
            
                this.todos = todos

                if (todo.projectName !== "default") {
                    index.projects.forEach((e) => {
                        todos = e.todos.filter((e) => e.title !== todo.title)
                        e.todos = todos
                    })
                } 
        })
        expandBtn.addEventListener("click",() => {
            if(expandBtn.id !== "expand_active") {
                expandBtn.id = "expand_active"
                expandContent.id = "expandContent_active"
            } else {
                expandBtn.id = "expand"
                expandContent.id = "expandContent"
            }
        })
    }
    render(card) {
        this.showcase.appendChild(card)
    }
}


const index = (() => {
    projects = []
    const project = new Project("default")

    function _init () {
        if (this.projects.length === 0) {
            addProject(project)
            selectElement(dropdown, "default")
        }
    }

    //cache DOM
        const addToDoBtn = document.querySelector("#addToDo")
        const modal = document.querySelector(".modal")
        const closeToDoBtn = document.querySelector(".closeBtn")
        const closeProjectBtn = document.querySelector(".closeProjectBtn")
        const addToDoSubmitBtn = document.querySelector("#submit")
        const submitProjectBtn = document.querySelector("#submitProject")
        const titleInput = document.querySelector('#title')
        const descriptionInput = document.querySelector('#description')
        const dueDateInput = document.querySelector('#due-date')
        const priorityInput = document.querySelector('#priority')
        const newProjectBtn = document.querySelector("#newProject")
        const modalProject = document.querySelector(".modalProject")
        const dropdown = document.getElementById("dropdown")
    

    // bindEvents
        addToDoBtn.addEventListener("click",() => modal.style.display = 'block')
        closeToDoBtn.addEventListener("click",() => modal.style.display = 'none')
        window.addEventListener('click',(e) => {
            if(e.target == modal) {
                this.modal.style.display = 'none'
            } else if (e.target == modalProject) {
                modalProject.style.display = 'none'
            }
        })
        addToDoSubmitBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const findProject = projects.find((project) => {
                return project.name === currentProject
            })
            findProject.createToDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value)
            modal.style.display = 'none'
        })
        newProjectBtn.addEventListener("click", (e) => modalProject.style.display = 'block')
        closeProjectBtn.addEventListener("click",() => modalProject.style.display = 'none')
        submitProjectBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const newProject = new Project(projectTitle.value)
            addProject(newProject)
            selectElement(dropdown, projectTitle.value)
            modalProject.style.display = 'none'
        })
        dropdown.onchange = () => {
            projectController(dropdown.value)
        }
    
        function selectElement (element, valueToSelect) {
            element.value = valueToSelect;
        }
        function projectController (projectSelect) {
            currentProject = projectSelect
            render()
        }
        function addProject (newProject) {
            projects.push(newProject)
            projectController(newProject.name)
        }
        function clearDropDown () {
            const length = dropdown.options.length
            for (i = length-1; i >= 0; i--) {
                dropdown.options[i] = null;
            }
        }

        function render () {
            clearDropDown()
            
            projects.forEach((project) => {
                const projectDropdown = document.createElement("option")
                projectDropdown.text = project.name
                dropdown.add(projectDropdown)
            })

            selectElement(dropdown, currentProject)

            const findProject = projects.find((project) => {
                return project.name === currentProject
            })

            findProject.cacheDOM()
        }

        _init()

        return {
            projects: projects
        }
})()

function Todo(title, description, dueDate, priority, name) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.projectName = name
}






// const index = {
//     projects: [],

//     init: function() {
//         this.cacheDom()
//         this.bindEvents()
//         const project = new Project("default")
//         if (this.projects.length === 0) {
//             this.addProject(project)
//             this.selectElement(dropdown, "default")
//         }
//     },

//     cacheDom: function() {
//         this.addToDoBtn = document.querySelector("#addToDo")
//         this.modal = document.querySelector(".modal")
//         this.closeToDoBtn = document.querySelector(".closeBtn")
//         this.closeProjectBtn = document.querySelector(".closeProjectBtn")
//         this.addToDoSubmitBtn = document.querySelector("#submit")
//         this.submitProjectBtn = document.querySelector("#submitProject")
//         this.titleInput = document.querySelector('#title')
//         this.descriptionInput = document.querySelector('#description')
//         this.dueDateInput = document.querySelector('#due-date')
//         this.priorityInput = document.querySelector('#priority')
//         this.newProjectBtn = document.querySelector("#newProject")
//         this.modalProject = document.querySelector(".modalProject")
//         this.dropdown = document.getElementById("dropdown")
//     },
//     bindEvents: function() {
//         this.addToDoBtn.addEventListener("click",() => this.modal.style.display = 'block')
//         this.closeToDoBtn.addEventListener("click",() => this.modal.style.display = 'none')
//         window.addEventListener('click',(e) => {
//             if(e.target == this.modal) {
//                 this.modal.style.display = 'none'
//             } else if (e.target == this.modalProject) {
//                 this.modalProject.style.display = 'none'
//             }
//         })
//         this.addToDoSubmitBtn.addEventListener("click", (e) => {
//             e.preventDefault()
//             const findProject = this.projects.find((project) => {
//                 return project.name === this.currentProject
//             })
//             findProject.createToDo(this.titleInput.value, this.descriptionInput.value, this.dueDateInput.value, this.priorityInput.value)
//             this.modal.style.display = 'none'
//         })

//         this.newProjectBtn.addEventListener("click", (e) => this.modalProject.style.display = 'block')
//         this.closeProjectBtn.addEventListener("click",() => this.modalProject.style.display = 'none')
//         this.submitProjectBtn.addEventListener("click", (e) => {
//             e.preventDefault()
//             const newProject = new Project(projectTitle.value)
//             this.addProject(newProject)
//             this.selectElement(dropdown, projectTitle.value)
//             this.modalProject.style.display = 'none'
//         })
//         this.dropdown.onchange = () => {
//             this.projectController(dropdown.value)
//         }
//     },
//     selectElement: function (element, valueToSelect) {
//         element.value = valueToSelect;
//     },
//     projectController: function (projectSelect) {
//         this.currentProject = projectSelect
//         this.render()
//     },
//     addProject: function(newProject) {
//         this.projects.push(newProject)
//         this.projectController(newProject.name)
//     },

//     clearDropDown: function() {
//         const length = this.dropdown.options.length
//         for (i = length-1; i >= 0; i--) {
//             this.dropdown.options[i] = null;
//         }
//     },

//     render: function() {
//         this.clearDropDown()
        
//         this.projects.forEach((project) => {
//             const projectDropdown = document.createElement("option")
//             projectDropdown.text = project.name
//             this.dropdown.add(projectDropdown)
//         })

//         this.selectElement(this.dropdown, this.currentProject)

//         const findProject = this.projects.find((project) => {
//             return project.name === this.currentProject
//         })

//         findProject.cacheDOM()
//     }
// }


// class Project {
//     constructor(projectName) {
//         this.name = projectName
//         this.todos = []
//     }
//     createToDo(title, description, dueDate, priority) {
//         const newTodo = new Todo(title, description, dueDate, priority, this.name)
//         this.addToDo(newTodo)
//     }
//     addToDo(newTodo) {
//         this.todos.push(newTodo)
//         this.cacheDOM()
//         if (this.name !== "default") {
//             index.projects[0].todos.push(newTodo)
//         }
//     }
//     clearDOM() {
//         this.showcase.innerHTML = ""
//         this.createDOMS()
//     }
//     cacheDOM() {
//         this.showcase = document.querySelector(".showcase")
//         this.clearDOM()
//     }
//     createDOMS() {
//         let i = 0
//         this.todos.forEach((todo) => {
//             const card = document.createElement('div')
//             const title = document.createElement('p')
//             const expandContent = document.createElement('div')
//             const expandBtn = document.createElement('button')
//             const description = document.createElement('p')
//             const dueDate = document.createElement('p')
//             const removeBtn = document.createElement('button')
//             const label = document.createElement('label')
//             const checkBox = document.createElement('input')
     

//             removeBtn.classList.add('closeToDo')
//             removeBtn.id = 'closeToDo' + i
//             checkBox.setAttribute("type", "checkbox")
//             checkBox.id= "completed"
//             // expand.id = "expand"
//             expandBtn.id = "expand"
//             expandContent.id = 'expandContent'
        

//             title.textContent = todo.title
//             description.textContent = todo.description
//             dueDate.textContent = "Due date: " + todo.dueDate 
//             removeBtn.textContent = "x"
//             label.textContent = "Completed: "
//             label.htmlFor = "completed"

//             expandContent.appendChild(description)
//             expandContent.appendChild(dueDate)

//             card.appendChild(title)
//             card.appendChild(removeBtn)
//             card.appendChild(label)
//             card.appendChild(checkBox)
//             card.appendChild(expandBtn)
//             card.appendChild(expandContent)

//             console.log(card)

//             if (todo.priority === "high") {
//                 card.classList.add('cardRed')
//             } else if (todo.priority === "low") {
//                 card.classList.add('cardGreen')
//             } else { 
//                 card.classList.add('cardMedium')
//             }
//             this.bindEvents(removeBtn, card, todo, expandBtn, expandContent)
//             this.render(card)
//             i++
//         })
//     }
//     bindEvents(removeBtn, card, todo, expandBtn, expandContent) {
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
//     }
//     render(card) {
//         this.showcase.appendChild(card)
//     }
// }

// index.init()


// function Todo(title, description, dueDate, priority, name) {
//     this.title = title
//     this.description = description
//     this.dueDate = dueDate
//     this.priority = priority
//     this.projectName = name
// }

