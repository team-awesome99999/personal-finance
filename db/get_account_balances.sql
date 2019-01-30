select balances.id, balances.accountid, balances.balance, balances.entrydate from balances
JOIN accounts ON balances.accountid = accounts.id
WHERE accounts.userid = $1
order by balances.entrydate DESC