// Jared's Testing
import {accountTotal, accountBalance} from './chartTotal'

const array = [1,2,3,4]
const array2 = [499,8,7,6,5]
const array3 = [1500, 900, 44500, 200]
const accounts = [array, array2, array3]

describe("Returns the total assets from all accounts", ()=>{
    it("Should only accept an array of numbers", ()=>{
        expect(accountTotal(accounts)).toBe(2000)
    })
    it("Should accept an array", ()=>{
        expect(accountTotal(accounts)).toBe(2000)
    })
    it("Should add recent totals from different accounts", ()=>{
        expect(accountTotal(accounts)).toBe(2000)
    })
})

describe("Returns the most recent account balance for that specific account", ()=>{
    it("Should only accept an array of numbers", ()=>{
        expect(accountBalance(array3)).toBe(1500)
    })
    it("Should accept an array", ()=>{
        expect(accountBalance(array3)).toBe(1500)
    })
    it("Should return the most recent account balance", ()=>{
        expect(accountBalance(array3)).toBe(1500)
    })
})