DELETE FROM pending_reservation WHERE pending_id = $1;

SELECT pending_id, dog.name, start_date, end_date FROM pending_reservation
INNER JOIN dog ON dog.dog_id = pending_reservation.dog_id
WHERE client_id = $2;