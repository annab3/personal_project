INSERT INTO client (username, password, first_name, last_name, primary_number, secondary_number, address, city, state, zip, email, client_picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
SELECT * FROM client WHERE username= $1;