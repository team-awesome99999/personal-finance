UPDATE accounts
SET name = $1
WHERE id = $2
RETURNING *;