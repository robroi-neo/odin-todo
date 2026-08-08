# Odin Todo

A simple todo list app built with vanilla JavaScript (ES modules) — no frameworks, no build tools.

## Features

- Organize tasks into projects (with default starter projects for new users)
- Add, complete, and delete tasks
- Collapsible sidebar for navigating projects
- Dark, Linear-inspired UI

## Getting Started

Since this project uses native ES modules with no bundler, open `index.html` through a local web server (opening it directly via `file://` won't work due to module CORS restrictions).

For example, using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, or any static server:

```bash
npx serve .
```

Then visit the printed local URL in your browser.

## Project Structure

```
src/
├── factories/    # Factory functions for creating users, projects, and tasks
├── models/       # Core domain classes: User, Project, Task
├── views/        # UI components: App, Sidebar, TodoList
├── styles/       # CSS
└── index.js      # Entry point
```

## About

This project follows [The Odin Project](https://www.theodinproject.com/)'s Todo List assignment.