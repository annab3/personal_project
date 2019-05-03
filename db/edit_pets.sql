UPDATE dog
SET name = $2,
      picture = $3,
      breed = $4,
      birthday = $5,
      weight = $6,
      color = $7,
      feeding = $8
WHERE dog_id = $1;

SELECT * FROM dog WHERE client_id = $9 ORDER BY dog_id ASC;