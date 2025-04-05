class contact {
    constructor (){
        const content = document.getElementById("content");
        content.innerHTML="";

        const contact = document.createElement("section");
        const contactbody = document.createElement("p");
        const contacth1 = document.createElement("h1");

        contactbody.textContent = "For more info, please contact us at";
        contacth1.textContent = "PeanutPalace@gmail.com";

        contact.append(contactbody);
        contact.append(contacth1)
        content.append(contact);
    }
}

export default contact;