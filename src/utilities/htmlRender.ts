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
        const intro : HTMLElement | null  = document.getElementById("intro");
        const history : HTMLElement | null  = document.getElementById("history");
        const schems : HTMLElement | null  = document.getElementById("schematics");
        const invest : HTMLElement | null  = document.getElementById("investigation");

        //Event listeners attachement
        home?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/');
        });
        intro?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/intro');
        });
        history?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/history');
        });
        schems?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/schematics');
        });
        invest?.addEventListener("click", () => {
            HtmlRenderer.onNavigate(router, rootDiv, '/investigation');
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