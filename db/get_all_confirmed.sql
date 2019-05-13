SELECT id, dog.name, start_date, end_date, kennel FROM confirmed_reservation
INNER JOIN dog ON dog.dog_id = confirmed_reservation.dog_id
WHERE confirmed_reservation.end_date > $1 ORDER BY start_date ASC;
