class Task {
    constructor(id, title, description, dueDate = null, priority = "low"){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(newTitle){
        this.title = newTitle
    }
}

export default Task;
