import page from "../node_modules/page/page.mjs";
import { catalogView } from "./views/catalogView.js";
import { homeView , renderContent} from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logout } from "./services/logout.js";
import { registerView } from "./views/registerView.js";
import { createView } from "./views/createView.js";
import { navigationView } from "./services/navigationLoad.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { searchView } from "./views/searchView.js";

// page(renderContent);
// page(navigationView);
// page('/', homeView);
// page('/login', loginView);
// page('/register', registerView);
// page('/logout', logout);
// page('/search', searchView);
// page('/catalog', catalogView);
// page('/create', createView);
// page('/details/:id', detailsView)
// page('/edit/:id', editView)

page.start();