import User from "../models/User.js";
import defaultProjectsFactory from "./defaultProjectsFactory.js";

class userFactory {
    static #userId = 1;

    static create(username){
        if (!username) throw new Error("User Must have username");
        const user = new User(this.#assignId(), username);

        this.#addDefaultProjects(user);

        return user;
    }

    static #assignId(){
        return this.#userId++;
    }

    static #addDefaultProjects(user){
        for (const project of defaultProjectsFactory.create()) {
            user.addProject(project);
        }
    }
}

export default userFactory;