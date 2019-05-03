INSERT INTO pending_reservation (start_date, end_date, dog_id) VALUES ($1, $2, $3);

SELECT pending_id, dog.name, start_date, end_date FROM pending_reservation
INNER JOIN dog ON dog.dog_id = pending_reservation.dog_id
WHERE client_id = $4 ORDER BY start_date ASC;
