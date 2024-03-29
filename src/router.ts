
import { RouterMap } from "./types/routerTypes";
import { homePage } from "./views/home";
import { historyPage } from "./views/history";
import { schematicsPage } from "./views/schematic";
import { introductionPage } from "./views/introduction";
import { investigationPage } from "./views/investigations";
import { legendsPage } from "./views/legends";
import { factsPage } from "./views/facts";
import { discoveriesPage } from "./views/discoveries";



export const router : RouterMap = {
    '/': homePage,
    '/intro': introductionPage,
    '/history': historyPage,
    '/schematics': schematicsPage,
    '/investigation': investigationPage,
    '/legends': legendsPage,
    '/facts': factsPage,
    '/discoveries': discoveriesPage

};

