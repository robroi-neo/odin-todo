import Sidebar from "./Sidebar.js";
import TodoList from "./TodoList.js";
import taskFactory from "../factories/taskFactory.js";

class App {
    constructor(user) {
        this.user = user;
        const firstProject = user.getAllProjects()[0];
        this.selectedProjectId = firstProject ? firstProject.id : null;
    }

    mount(root) {
        this.root = root;
        this.render();
    }

    selectProject(id) {
        this.selectedProjectId = id;
        this.render();
    }

    addTask(title) {
        const project = this.#getSelectedProject();
        if (!project) return;
        project.addTask(taskFactory.create(title));
        this.render();
    }

    #getSelectedProject() {
        return this.user.getAllProjects().find(project => project.id === this.selectedProjectId) ?? null;
    }

    render() {
        this.root.innerHTML = "";

        const layout = document.createElement("div");
        layout.className = "app-layout";

        const sidebar = new Sidebar({
            projects: this.user.getAllProjects(),
            selectedProjectId: this.selectedProjectId,
            onSelectProject: (id) => this.selectProject(id),
        });

        const todoList = new TodoList({
            project: this.#getSelectedProject(),
            onAddTask: (title) => this.addTask(title),
        });

        layout.appendChild(sidebar.render());
        layout.appendChild(todoList.render());

        this.root.appendChild(layout);
    }
}

export default App;
