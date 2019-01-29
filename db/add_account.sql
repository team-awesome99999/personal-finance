INSERT INTO accounts (userid, name) 
VALUES ($1, $2)
RETURNING *;