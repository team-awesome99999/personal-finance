insert into goals(name,end_amount,current_amount,end_date,user_id)
values($1,$2,$3,$4,$5);
-- returning * where user_id=$5;