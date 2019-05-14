SELECT email FROM client
INNER JOIN dog ON client.client_id = dog.client_id
WHERE dog.dog_id = $1;