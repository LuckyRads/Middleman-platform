function itemDelete(element){
    let a = document.getElementsByClassName(element)[0];

    if(a === undefined){
        return "Item doesn't exist";
    }
    let status = a.childNodes[3];

    if(status.innerHTML === "Status: Deleted"){
        return "Item is already deleted";
    }

    status.innerHTML = "Status: Deleted";

    return "Item deleted";
}

