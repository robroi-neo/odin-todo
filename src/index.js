import userFactory from "./factories/userFactory.js";
import App from "./views/App.js";

const user = userFactory.create("robroi");

const app = new App(user);
app.mount(document.getElementById("app"));
