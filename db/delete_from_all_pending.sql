DELETE FROM pending_reservation WHERE pending_id = $1;

SELECT pending_id, dog.name, client.first_name, client.last_name, start_date, end_date FROM pending_reservation
INNER JOIN dog ON dog.dog_id = pending_reservation.dog_id
INNER JOIN client ON dog.client_id = client.CLIENT_id
WHERE start_date > NOW() ORDER BY start_date ASC;