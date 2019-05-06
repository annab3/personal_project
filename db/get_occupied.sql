SELECT id, dog.name, start_date, end_date, kennel FROM confirmed_reservation
INNER JOIN dog ON dog.dog_id = confirmed_reservation.dog_id
WHERE (start_date <= $1 AND end_date >= $2) OR (start_date >= $1 AND start_date <= $2) 
OR (end_date >= $1 AND end_date <= $2);