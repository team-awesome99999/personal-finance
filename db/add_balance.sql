INSERT INTO balances (accountid, balance, entrydate) 
VALUES ($1, $2, $3)
RETURNING *; 