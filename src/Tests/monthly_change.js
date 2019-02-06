import moment from 'moment';

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

export function makeDateObj(res) {
  let changeDates = { };
  let currentMonth = res[0].entrydate;
  var d = new Date(currentMonth);
  let previousMonth = moment(d).subtract(30, 'days').format();
  for(let i=0; i<res.length; i++) {
    if(res[i].entrydate === currentMonth) {
      changeDates.thisMonth = res[i].balance;
    } else if (moment(res[i].entrydate).isSameOrBefore(previousMonth)) {
      changeDates.lastMonth = res[i].balance;
      break;
    }
  }
  return changeDates;
}