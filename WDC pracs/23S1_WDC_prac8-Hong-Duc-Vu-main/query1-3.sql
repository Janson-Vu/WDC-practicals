SELECT customer.first_name, customer.last_name, rental.rental_date
FROM customer
INNER JOIN rental
    ON customer.customer_id = rental.customer_id
    WHERE rental.rental_date = (SELECT MIN(rental_date) FROM rental WHERE return_date IS NULL);
