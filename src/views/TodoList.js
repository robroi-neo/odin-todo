class TodoList {
    constructor({ project, onAddTask }) {
        this.project = project;
        this.onAddTask = onAddTask;
    }

    render() {
        const section = document.createElement("section");
        section.className = "todo-list";

        section.appendChild(this.#renderHeading());
        section.appendChild(this.#renderItems());
        section.appendChild(this.#renderForm());

        return section;
    }

    #renderHeading() {
        const heading = document.createElement("h1");
        heading.className = "todo-list__heading";
        heading.textContent = this.project ? this.project.name : "No project selected";
        return heading;
    }

    #renderItems() {
        const ul = document.createElement("ul");
        ul.className = "todo-list__items";

        const tasks = this.project ? this.project.getAllTasks() : [];

        if (tasks.length === 0) {
            const empty = document.createElement("li");
            empty.className = "todo-list__empty";
            empty.textContent = "No to-dos yet — add one below.";
            ul.appendChild(empty);
            return ul;
        }

        for (const task of tasks) {
            const li = document.createElement("li");
            li.className = "todo-list__item";

            const title = document.createElement("span");
            title.className = "todo-list__title";
            title.textContent = task.title;

            const priority = document.createElement("span");
            priority.className = `todo-list__priority todo-list__priority--${task.priority}`;
            priority.textContent = task.priority;

            li.appendChild(title);
            li.appendChild(priority);
            ul.appendChild(li);
        }

        return ul;
    }

    #renderForm() {
        const form = document.createElement("form");
        form.className = "todo-list__form";

        const input = document.createElement("input");
        input.type = "text";
        input.className = "todo-list__input";
        input.placeholder = "Add a new to-do...";
        input.disabled = !this.project;

        const button = document.createElement("button");
        button.type = "submit";
        button.className = "todo-list__submit";
        button.textContent = "Add";
        button.disabled = !this.project;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = input.value.trim();
            if (!title) return;
            this.onAddTask(title);
            input.value = "";
        });

        form.appendChild(input);
        form.appendChild(button);
        return form;
    }
}

export default TodoList;
