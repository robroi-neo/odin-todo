import Task from "../models/Task.js";

class taskFactory {
    static #taskId = 1;

    static create(title, description, dueDate, priority){
        // add error throw if missing one
        return new Task(this.#assignId(), title, description, dueDate, priority);
    }

    static #assignId(){
        return this.#taskId++;
    }
}

export default taskFactory;