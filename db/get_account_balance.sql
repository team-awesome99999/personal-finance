select *
from accounts a
join balances b
on b.accountid=a.userid
where a.userid=$1;