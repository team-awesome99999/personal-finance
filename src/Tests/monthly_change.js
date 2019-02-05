
export function changes(balanceChanges) {
  const { thisMonth, lastMonth } = balanceChanges;
  if(!lastMonth) {
    return "-";
  }
  if(+lastMonth === +thisMonth) {
    return "No Change";
  }
  return thisMonth - lastMonth;
}