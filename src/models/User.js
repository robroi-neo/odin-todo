class User {
    #id;

    constructor(id, username){
        this.#id = id;
        this.username = username;
        this.projects = [];   
    }

    addProject(project){
        this.projects.push(project)
    }

    removeProjects(id){
        this.projects = this.projects.filter(project => project.id != id);
    }

    getAllProjects(){
        return this.projects;
    }

    // debug
    printUserTasks(user) {
        console.log(`Tasks for ${this.username}:`);
        for (const project of this.projects) {
            for (const task of project.tasks) {
                console.log(`- [${project.name}] ${task.title}`);
            }
        }
    }

}

export default User;