import peanutImg from '../assets/peanuts.png'

class home {
    constructor (){
        const content = document.getElementById("content");
        content.innerHTML="";
        

        const specials = document.createElement("section");
        specials.classList.add("specials");

        const specialsul = document.createElement("ul");

        const specialsdaily = document.createElement("li");
        specialsdaily.textContent = "DAILY SPECIALS"

        const specialsmenu = document.createElement("li");
        specialsmenu.textContent = "MENU"

        const specialsevents = document.createElement("li");
        specialsevents.textContent = "PRIVATE EVENTS"

        specialsul.append(specialsdaily);
        specialsul.append(specialsmenu);
        specialsul.append(specialsevents);
        specials.append(specialsul);



        const info = document.createElement("section");
        info.classList.add("info");

        const infoh1 = document.createElement("h1");
        infoh1.textContent = "Welcome to Peanut Palace";

        const infotext = document.createElement("p");
        infotext.textContent = `
            Situated along the banks of the Vermilion River in the heart of Vermilion Parish, 
            Peanut Palace is Lafayette's finest restaurant, offering indoor and outdoor dining for over 100 years. 
            Serving all your Louisiana favorites, while also serving up new innovative items
            `

        const infoimg = document.createElement("img");
        infoimg.src = peanutImg;

        // ./assets/peanuts.png
        info.append(infoh1);
        info.append(infotext);
        info.append(infoimg);

        content.append(specials);
        content.append(info);
    }
}

export default home;
