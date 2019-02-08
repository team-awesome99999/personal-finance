select g.id,name,end_amount,current_amount,end_date,user_id from goals g
join users u
on u.id = g.user_id
where g.user_id = $1
order by g.end_date DESC
;