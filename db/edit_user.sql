UPDATE client
SET first_name = $1,
    last_name = $2,
    primary_number = $3,
    secondary_number = $4,
    address = $5,
    city = $6,
    state = $7,
    zip = $8
WHERE client_id = $9;

SELECT * FROM client WHERE client_id = $9;