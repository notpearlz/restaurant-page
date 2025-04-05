import "./styles.css"
import home from "./modules/home"
import menu from "./modules/menu"
import contact from "./modules/contact"



const nav = document.getElementById("nav");

for(const btn of nav.children){
    btn.addEventListener("click", () => {
        if(btn == nav.children[0]){
            new home();
            
        }else if(btn == nav.children[1]){
            new menu();

        } else if(btn == nav.children[2]){
            new contact();
            
        }
    })
}



