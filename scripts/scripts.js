const contactbtn = document.getElementById("contactbtn")
const contactmsg = document.getElementById("contactmsg")
contactbtn.addEventListener("click", () => {
    if (contactmsg.style.display === "none" || contactmsg.style.display === "") {
    contactmsg.style.display = "block";
    } else {
        contactmsg.style.display = "none";
    }
});