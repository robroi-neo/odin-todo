class Sidebar {
    constructor({ projects, selectedProjectId, onSelectProject }) {
        this.projects = projects;
        this.selectedProjectId = selectedProjectId;
        this.onSelectProject = onSelectProject;
    }

    render() {
        const aside = document.createElement("aside");
        aside.className = "sidebar";

        const heading = document.createElement("h2");
        heading.className = "sidebar__heading";
        heading.textContent = "My Projects";
        aside.appendChild(heading);

        const list = document.createElement("ul");
        list.className = "sidebar__list";

        for (const project of this.projects) {
            list.appendChild(this.#renderItem(project));
        }

        aside.appendChild(list);
        return aside;
    }

    #renderItem(project) {
        const item = document.createElement("li");
        item.className = "sidebar__item";
        if (project.id === this.selectedProjectId) {
            item.classList.add("sidebar__item--active");
        }
        item.textContent = project.name;
        item.addEventListener("click", () => this.onSelectProject(project.id));
        return item;
    }
}

export default Sidebar;
