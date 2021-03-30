const items = {
}
const deletedItems = {}

function itemDelete(element){

    if(deletedItems.id === element){
        return "Item is already deleted";
    }

    if(items.id !== element){
        return "Item doesn't exist";
    }

    deletedItems.id = element;
    delete items.id;

    return "Item deleted";
}

function addElement(){
    items.id =1234;
}

function clearDeleted(){
    delete deletedItems.id;
}

module.exports = {
    itemDelete,
    addElement,
    clearDeleted
}
