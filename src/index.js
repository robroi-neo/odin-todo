import projectFactory from "./factories/projectFactory.js";
import taskFactory from "./factories/taskFactory.js";
import userFactory from "./factories/userFactory.js";

const user = userFactory.create("robroi");
const project = projectFactory.create("Project 1")
user.addProject(project);

project.addTask(taskFactory.create("task 1"));
project.addTask(taskFactory.create("task 2"));
project.addTask(taskFactory.create("task 3"));

const project2 = projectFactory.create("Project 2")

user.addProject(project2);
project2.addTask(taskFactory.create("task 1"));
project2.addTask(taskFactory.create("task 2"));
project2.addTask(taskFactory.create("task 3"));

user.printUserTasks();

// remove task from project2

user.removeProjects(project2.id);
user.printUserTasks();

