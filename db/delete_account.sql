DELETE FROM balances
WHERE accountid = $1;

DELETE FROM accounts
WHERE id = $1;