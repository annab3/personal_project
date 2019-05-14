SELECT id, dog.name, start_date, end_date, kennel, client.first_name, client.last_name FROM confirmed_reservation
INNER JOIN dog ON dog.dog_id = confirmed_reservation.dog_id
INNER JOIN client ON dog.client_id = client.client_id
WHERE id = $1;
