
var sites = []

class Managed {
    constructor(argName, argPass) {
        this.site = argName
        this.pass = argPass
    }



}
class Query {
    constructor(argQuery) {
        this.site = argQuery
    }
}


function submit() {
    let sName = document.getElementById("sName").value;
    let Password = document.getElementById("Password").value;
    sites.push(new Managed(sName, Password));
    console.log(sites);
}

function query() {
    let sQuery = document.getElementById("sQuery").value;
    sites.push(new Query(sQuery))
    console.log(sites);
}