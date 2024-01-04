import { RouterMap } from "../types/routerTypes";

export class HtmlRenderer {
   
    static render(rootDiv : HTMLElement | null, router : RouterMap) {
        if(!rootDiv) {
            throw Error("This page is not found!");
        };

        rootDiv.innerHTML = router[window.location.pathname];

        HtmlRenderer.eventListnerHandler(rootDiv, router);
    }

    static eventListnerHandler (rootDiv : HTMLElement | null, router : RouterMap) {
  
        const home : HTMLElement | null = document.getElementById("home");
        const about = document.getElementById("about");
        const contact = document.getElementById("contact");

        //Event listeners attachement
        home?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/');
        });
    }
     
     //callback function
    static onNavigate (router : RouterMap, rootDiv : HTMLElement | null, pathname : string) {
        const {origin} = window.location;
        window.history.pushState({}, pathname, `${origin}${pathname}`);
    
        if(rootDiv) {
            rootDiv.innerHTML = router[pathname];
        };
    }; 

}