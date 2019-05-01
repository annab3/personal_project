INSERT INTO dog (name, picture, breed, birthday, weight, color, feeding, client_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM dog WHERE client_id = $8;