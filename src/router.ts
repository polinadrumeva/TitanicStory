
import { RouterMap } from "./types/routerTypes";
import { homePage } from "./views/home";
import { historyPage } from "./views/history";
import { schematicsPage } from "./views/schematic";
import { introductionPage } from "./views/introduction";



export const router : RouterMap = {
    '/': homePage,
    '/intro': introductionPage,
    '/history': historyPage,
    '/schematics': schematicsPage,
};