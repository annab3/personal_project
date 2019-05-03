SELECT id, dog.name, start_date, end_date, kennel FROM confirmed_reservation
INNER JOIN dog ON dog.dog_id = confirmed_reservation.dog_id
WHERE dog.client_id = $1 AND confirmed_reservation.end_date < NOW() ORDER BY start_date DESC;
