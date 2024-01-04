import { homePage } from "./views/home";

type RouterMap = {
    [key : string] : string;
};

const router : RouterMap = {
    '/': homePage,
};

const rootDiv = document.getElementById("root");
if(rootDiv) {
    rootDiv.innerHTML = router[window.location.pathname];
};

const onNavigate = (pathname : string) => {
    const {origin} = window.location;
    window.history.pushState({}, pathname, `${origin}${pathname}`);
    
    if(rootDiv) {
        rootDiv.innerHTML = router[pathname];
    };
}; 

const home : HTMLElement | null = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

home?.addEventListener("click", () => {
    onNavigate('/');
});