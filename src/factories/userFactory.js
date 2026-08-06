import User from "../models/User.js";
import projectFactory from "./projectFactory.js";
import taskFactory from "./taskFactory.js";

class userFactory {
    static #userId = 1;

    static create(username){
        if (!username) throw new Error("User Must have username");
        const user = new User(this.#assignId(), username);

        const defaultProject = projectFactory.create("My Day");
        defaultProject.addTask(taskFactory.create("Welcome to your todo list!"));
        user.addProject(defaultProject);

        return user;
    }

    static #assignId(){
        return this.#userId++;
    }
}

export default userFactory;