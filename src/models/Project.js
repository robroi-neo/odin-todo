
class Project {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }
}

export default Project;