class Sidebar {
    constructor({ username, projects, selectedProjectId, collapsed, onSelectProject, onAddProject, onToggleCollapsed }) {
        this.username = username;
        this.projects = projects;
        this.selectedProjectId = selectedProjectId;
        this.collapsed = collapsed;
        this.onSelectProject = onSelectProject;
        this.onAddProject = onAddProject;
        this.onToggleCollapsed = onToggleCollapsed;
    }

    render() {
        const aside = document.createElement("aside");
        aside.className = "sidebar";
        if (this.collapsed) {
            aside.classList.add("sidebar--collapsed");
        }

        aside.appendChild(this.#renderTopBar());
        aside.appendChild(this.#renderHeader());

        const list = document.createElement("ul");
        list.className = "sidebar__list";

        for (const project of this.projects) {
            list.appendChild(this.#renderItem(project));
        }

        aside.appendChild(list);
        return aside;
    }

    #renderTopBar() {
        const topBar = document.createElement("div");
        topBar.className = "sidebar__top";

        const menuToggle = document.createElement("button");
        menuToggle.type = "button";
        menuToggle.className = "menu-toggle";
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Toggle sidebar");
        menuToggle.addEventListener("click", () => this.onToggleCollapsed());

        const user = document.createElement("div");
        user.className = "sidebar__user";
        user.textContent = this.username;

        topBar.appendChild(menuToggle);
        topBar.appendChild(user);
        return topBar;
    }

    #renderHeader() {
        const header = document.createElement("div");
        header.className = "sidebar__header";

        const heading = document.createElement("h2");
        heading.className = "sidebar__heading";
        heading.textContent = "My Lists";

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "sidebar__add-btn";
        addButton.textContent = "+";
        addButton.setAttribute("aria-label", "Add project");
        addButton.addEventListener("click", () => this.onAddProject());

        header.appendChild(heading);
        header.appendChild(addButton);
        return header;
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
