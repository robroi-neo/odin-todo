import projectFactory from "./projectFactory.js";
import taskFactory from "./taskFactory.js";

const DEFAULT_PROJECTS = [
    { name: "My Day", task: "Welcome to your todo list!" },
    { name: "Work", task: "Add your first work task" },
    { name: "Personal", task: "Add your first personal task" },
];

class defaultProjectsFactory {
    static create(){
        return DEFAULT_PROJECTS.map(({ name, task }) => {
            const project = projectFactory.create(name);
            project.addTask(taskFactory.create(task));
            return project;
        });
    }
}

export default defaultProjectsFactory;
