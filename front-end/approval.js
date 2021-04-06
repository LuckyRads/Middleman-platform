let transactions = [];
let approvedTransactions = [];

function approve(element){
    if(approvedTransactions.includes(element)){
        return "Transaction is already approved.";
    }

    if(!transactions.includes(element)){
        return "Transaction doesn't exist.";
    }

    approvedTransactions.push(element);

    return "Transaction approved.";
}

function load(){
    let i = 0;

    while (i < 6) {
        transactions.push(10000 + i)

        i++;
    }
}

function clear(){
    approvedTransactions = [];
    transactions = [];
}

module.exports = {
    approve,
    load,
    clear,
}
