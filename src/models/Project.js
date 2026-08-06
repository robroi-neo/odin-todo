
class Project {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(id){
        this.tasks = this.tasks.filter(task => task.id != task);
    }

    getAllTasks(){
        return this.tasks;
    }
}

export default Project;