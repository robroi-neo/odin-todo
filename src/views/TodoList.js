class TodoList {
    constructor({ project, onAddTask, onToggleTask, onDeleteTask }) {
        this.project = project;
        this.onAddTask = onAddTask;
        this.onToggleTask = onToggleTask;
        this.onDeleteTask = onDeleteTask;
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
            ul.appendChild(this.#renderItem(task));
        }

        return ul;
    }

    #renderItem(task) {
        const li = document.createElement("li");
        li.className = "todo-list__item";
        if (task.completed) li.classList.add("todo-list__item--completed");

        li.addEventListener("click", (event) => {
            if (event.target.closest("button")) return;
            const wasActive = li.classList.contains("todo-list__item--active");
            li.parentElement
                .querySelectorAll(".todo-list__item--active")
                .forEach((el) => el.classList.remove("todo-list__item--active"));
            if (!wasActive) li.classList.add("todo-list__item--active");
        });

        const left = document.createElement("div");
        left.className = "todo-list__item-left";

        const checkbox = document.createElement("button");
        checkbox.type = "button";
        checkbox.className = "todo-list__checkbox";
        if (task.completed) checkbox.classList.add("todo-list__checkbox--checked");
        checkbox.setAttribute("aria-label", task.completed ? "Mark as not completed" : "Mark as completed");
        checkbox.addEventListener("click", () => this.onToggleTask(task.id));

        const title = document.createElement("span");
        title.className = "todo-list__title";
        title.textContent = task.title;

        left.appendChild(checkbox);
        left.appendChild(title);

        const right = document.createElement("div");
        right.className = "todo-list__item-right";

        if (task.completed) {
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "todo-list__delete";
            deleteButton.textContent = "×";
            deleteButton.setAttribute("aria-label", "Delete task");
            deleteButton.addEventListener("click", () => this.onDeleteTask(task.id));
            right.appendChild(deleteButton);
        }

        li.appendChild(left);
        li.appendChild(right);
        return li;
    }

    #renderForm() {
        const form = document.createElement("form");
        form.className = "todo-list__form";

        const input = document.createElement("input");
        input.type = "text";
        input.className = "todo-list__input";
        input.placeholder = "+ Add Task";
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
