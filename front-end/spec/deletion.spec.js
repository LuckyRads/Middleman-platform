const deletion = require('../deletion.js');

describe("Delete functionality", () =>{
    it("Item is not found", () =>{
        expect(deletion.itemDelete(1235)).toBe("Item doesn't exist")
    })

    it("Item is deleted", () =>{
        deletion.clearDeleted();
        deletion.addElement(1234);
        expect(deletion.itemDelete(1234)).toBe("Item deleted")
    })

    it("Item is already deleted", () =>{
        deletion.addElement(1234);
        deletion.itemDelete(1234);
        expect(deletion.itemDelete(1234)).toBe("Item is already deleted")
    })
})