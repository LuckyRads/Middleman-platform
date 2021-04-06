const approval = require('../approval.js');

describe("Transaction Approval Tests", () =>{
    it("Transaction doesn't exists", () =>{
        approval.clear()
        expect(approval.approve(10001)).toBe("Transaction doesn't exist.")
    })

    it("Transaction may be approved", () =>{
        approval.clear();
        approval.load();
        expect(approval.approve(10001)).toBe("Transaction approved.")
    })

    it("Transaction must not be approved twice", () =>{
        approval.clear();
        approval.load();
        expect(approval.approve(10001)).toBe("Transaction approved.")
        expect(approval.approve(10001)).toBe("Transaction is already approved.")
    })
})
