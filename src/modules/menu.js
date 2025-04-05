class menu {
    constructor (){
        const content = document.getElementById("content");
        content.innerHTML="";

        
        const drinks = document.createElement("section");
        drinks.classList.add("box");
        const drinksul = document.createElement("ul");
        const drinks1 = document.createElement("li");
        drinks1.textContent = "Peanut Juice";
        const drinks2 = document.createElement("li");
        drinks2.textContent = "Nut Milk";

        drinksul.append(drinks1);
        drinksul.append(drinks2);
        drinks.append(drinksul);

        const snacks = document.createElement("section");
        snacks.classList.add("box");
        const snacksul = document.createElement("ul");
        const snacks1 = document.createElement("li");
        snacks1.textContent = "Banana Peanut Butter Wrap";
        const snacks2 = document.createElement("li");
        snacks2.textContent = "Peanut Butter & Jelly Sandwich";
        const snacks3 = document.createElement("li");
        snacks3.textContent = "Peanuts";

        snacksul.append(snacks1);
        snacksul.append(snacks2);
        snacksul.append(snacks3);
        snacks.append(snacksul);



        content.append(drinks);
        content.append(snacks);
    }
}

export default menu;