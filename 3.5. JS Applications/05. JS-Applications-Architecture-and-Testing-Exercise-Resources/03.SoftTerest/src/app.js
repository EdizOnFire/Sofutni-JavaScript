import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showDetails } from "./views/details.js";
import { showCreate } from "./views/create.js";
import { initialize } from "./router.js";
import { logout } from "./api/users.js";

document.querySelector("#views").remove();

const links = {
  "/": showHome,
  "/register": showRegister,
  "/login": showLogin,
  "/catalog": showCatalog,
  "/details": showDetails,
  "/create": showCreate,
  "/logout": onLogout
};

const router = initialize(links);
router.updateNav();
router.gotTo("/");

function onLogout() {
  logout();
  router.updateNav();
  router.gotTo('/')
}