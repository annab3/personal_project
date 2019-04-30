INSERT INTO dog (name, picture, breed, birthday, weight, color, feeding, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM dog WHERE owner_id = $8;