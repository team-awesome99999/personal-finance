-- grab users account and balance info
select *
from accounts a
join balances b
on b.accountid=a.userid
where a.userid=$1;

--add account
INSERT INTO accounts (userid, name) 
VALUES ($1, $2)
RETURNING *;

-- add balance
INSERT INTO balances (accountid, balance, entrydate) 
VALUES ($1, $2, $3)
RETURNING *; 

-- select all accounts for a specific user
SELECT accounts.name, accounts.type, b.accountid, b.balance, b.entrydate FROM accounts
JOIN balances as b ON (b.accountid = accounts.id)
WHERE accounts.userid = $1;

-- delete account
DELETE FROM balances
WHERE accountid = $1;

DELETE FROM accounts
WHERE id = $1;

-- delete balance
DELETE FROM balances
WHERE id = $1; 

-- get account balance
select *
from accounts a
join balances b
on b.accountid=a.userid
where a.userid=$1;

-- find a specific user
SELECT email, password, id, firstname, lastname FROM users
WHERE email = $1;

-- insert into goals table
insert into goals(name,end_amount,current_amount,end_date,user_id)
values($1,$2,$3,$4,$5);

-- get all savings accounts of a specific user
select name,end_amount,current_amount,end_date,user_id from goals g
join users u
on u.id = g.user_id
where g.user_id = $1
;