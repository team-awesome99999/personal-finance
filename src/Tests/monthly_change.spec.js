//Megan's Unit Tests

import { monthlyChange } from './monthly_change';

describe (`function to calculate change in assets month to month`, () => {
  let balanceChanges = { lastMonth: 3000, thisMonth: "5000" }
  it (`should return the difference between two numbers`, () => {
    let result = monthlyChange(balanceChanges);
    expect(result).toBe(2000);
  })
  it (`should return a dash if last months amount is falsey (account is not old enough)`, () => {
    let balanceChanges = { lastMonth: "", thisMonth: 5000 };
    let result = monthlyChange(balanceChanges);
    expect(result).toBe("-");
  })
  it (`should return a message if difference equals 0`, () => {
    let balanceChanges = { lastMonth: 3000, thisMonth: "3000"}
    let result = monthlyChange(balanceChanges);
    expect(result).toBe("No Change");
  })
  it (`should calculate correctly if one of the numbers passed in is a string`, () => {
    let result = monthlyChange(balanceChanges);
    expect(result).toBe(2000);
  })
  it (`should return the correct value if passed in object`, () => {
    let result = monthlyChange(balanceChanges);
    expect(result).toBe(2000);
  })
})