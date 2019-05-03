SELECT pending_id, dog.name, start_date, end_date FROM pending_reservation
INNER JOIN dog ON dog.dog_id = pending_reservation.dog_id
WHERE start_date > NOW() ORDER BY start_date ASC;