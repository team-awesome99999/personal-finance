UPDATE goals
SET current_amount = $1
WHERE id = $2
RETURNING *;