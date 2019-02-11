// Jared's Testing
import { isNumber, isArray } from "util";
export function accountTotal(array){
    // console.log(array)
    if(isArray(array) && isNumber(array[0][0])){
        const arr = []
        let reducer = (total, newNumber)=>{return total + newNumber}
        let recentBalance = array.map((account)=>{
            arr.push(account[0])
        })
        return arr.reduce(reducer)
    } else{
        return false
    }
}

export function accountBalance(array){
    if(isArray(array) && isNumber(array[0])){
        return array[0]
    }else{
        return false
    }
}
