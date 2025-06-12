const contact = document.getElementById('contact');
contact.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById('name').value.trim()
    const emailAddress = document.getElementById('email').value.trim()
    const msg = document.getElementById("message").value.trim()

    if(fullName === "" || emailAddress === "" || msg === ""){
        alert("Please fill in your name, email address and the message")
    }else{
        alert("Thanks")
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById("message").value = ""
    }
})