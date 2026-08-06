class Task {
    constructor(id, title, description, dueDate = null, priority = "low"){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    editTitle(newTitle){
        this.title = newTitle
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}

export default Task;
