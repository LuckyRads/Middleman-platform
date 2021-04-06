let transactions = [];
let approvedTransactions = [];

function approve(element){
    if(approvedTransactions.includes(element)){
        return "Transaction is already approved";
    }

    if(!transactions.includes(element)){
        return "Transaction doesn't exist";
    }

    approvedTransactions.push(element);

    return "Transaction approved";
}

module.exports = {
    approve,
}
