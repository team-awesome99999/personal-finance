select accounts.userid, accounts.name, accounts.type,accounts.id, balances.balance, balances.entrydate from accounts
join balances on (balances.accountid = accounts.id)
where accounts.userid = $1