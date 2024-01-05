
import { RouterMap } from "./types/routerTypes";
import { homePage } from "./views/home";
import { historyPage } from "./views/history";
import { schematicsPage } from "./views/schematic";
import { introductionPage } from "./views/introduction";
import { investigationPage } from "./views/investigations";



export const router : RouterMap = {
    '/': homePage,
    '/intro': introductionPage,
    '/history': historyPage,
    '/schematics': schematicsPage,
    '/investigation': investigationPage,

};