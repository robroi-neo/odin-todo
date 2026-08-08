import Sidebar from "./Sidebar.js";
import TodoList from "./TodoList.js";
import taskFactory from "../factories/taskFactory.js";
import projectFactory from "../factories/projectFactory.js";

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

    addProject() {
        const name = window.prompt("New project name")?.trim();
        if (!name) return;

        const project = projectFactory.create(name);
        this.user.addProject(project);
        this.selectedProjectId = project.id;
        this.render();
    }

    addTask(title) {
        const project = this.#getSelectedProject();
        if (!project) return;
        project.addTask(taskFactory.create(title));
        this.render();
    }

    toggleTask(taskId) {
        const project = this.#getSelectedProject();
        if (!project) return;
        const task = project.getAllTasks().find(task => task.id === taskId);
        if (!task) return;
        task.toggleCompleted();
        this.render();
    }

    deleteTask(taskId) {
        const project = this.#getSelectedProject();
        if (!project) return;
        project.removeTask(taskId);
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
            username: this.user.getUser(),
            projects: this.user.getAllProjects(),
            selectedProjectId: this.selectedProjectId,
            onSelectProject: (id) => this.selectProject(id),
            onAddProject: () => this.addProject(),
        });

        const todoList = new TodoList({
            project: this.#getSelectedProject(),
            onAddTask: (title) => this.addTask(title),
            onToggleTask: (id) => this.toggleTask(id),
            onDeleteTask: (id) => this.deleteTask(id),
        });

        layout.appendChild(sidebar.render());
        layout.appendChild(todoList.render());

        this.root.appendChild(layout);
    }
}

export default App;
