//Megan's Unit Tests

import { changes, makeDateObj } from './monthly_change';

describe (`function to calculate change in assets month to month`, () => {
  let balanceChanges = { lastMonth: 3000, thisMonth: "5000" }
  it (`should return the difference between two numbers`, () => {
    let result = changes(balanceChanges);
    expect(result).toBe(2000);
  })
  it (`should return a dash if last months amount is falsey (account is not old enough)`, () => {
    let balanceChanges = { lastMonth: "", thisMonth: 5000 };
    let result = changes(balanceChanges);
    expect(result).toBe("-");
  })
  it (`should calculate correctly if one of the numbers passed in is a string`, () => {
    let result = changes(balanceChanges);
    expect(result).toBe(2000);
  })
  it (`should return the correct value if passed in object`, () => {
    let result = changes(balanceChanges);
    expect(result).toBe(2000);
  })
})

describe(`function to make a date object for calculating change in assets`, () => {
  let res = [ 
    {
      accountid: 62,
      balance: "100.00",
      entrydate: "2019-02-04T07:00:00.000Z",
      id: 211
    }, 
    {
      accountid: 62,
      balance: "200.00",
      entrydate: "2019-01-25T07:00:00.000Z",
      id: 223
    }, 
    {
      accountid: 62,
      balance: "500.00",
      entrydate: "2019-01-01T07:00:00.000Z",
      id: 226
    } 
  ]
  it (`should return an object`, () => {
    let result = makeDateObj(res);
    expect(result).toMatchObject({});
  })
  it (`should return an object with two keys: lastMonth and thisMonth`, () => {
    let result = makeDateObj(res);
    expect(result).toEqual({ thisMonth: "100.00", lastMonth: "500.00"})
  })
})