import User from "../models/User.js";

class userFactory {
    static #userId = 1;

    static create(username){
        if (!username) throw new Error("User Must have username");
        return new User(this.#assignId(), username)
    }

    static #assignId(){
        return this.#userId++;
    }
}

export default userFactory;