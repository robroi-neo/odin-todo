import Project from "../models/Project.js";

class projectFactory {
    static #projectId = 1;

    static create(name){
        if (!name) throw new Error("Project must have name");
        return new Project(this.#assignId(), name);
    }

    static #assignId(){
        return this.#projectId++;
    }
}

export default projectFactory;