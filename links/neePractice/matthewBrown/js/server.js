
var name = "N/A"

class User {

    constructor(argName) {
        this.name = argName
    }
}

function submit() {
    let userName = document.getElementById("username").value;
    name.push(new User(userName));
    console.log(name);
}