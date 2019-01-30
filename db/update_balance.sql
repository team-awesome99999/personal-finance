UPDATE balances
SET balance = $2,
    entrydate = $3
WHERE id = $1
RETURNING *;