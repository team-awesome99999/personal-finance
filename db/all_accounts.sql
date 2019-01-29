SELECT accounts.name, accounts.type, b.accountid, b.balance, b.entrydate FROM accounts
JOIN balances as b ON (b.accountid = accounts.id)
WHERE accounts.userid = $1;