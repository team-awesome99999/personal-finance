select balances.balance, balances.entrydate, balances.accountid, accounts.userid, accounts.name from balances, accounts
WHERE accounts.userid = $1;