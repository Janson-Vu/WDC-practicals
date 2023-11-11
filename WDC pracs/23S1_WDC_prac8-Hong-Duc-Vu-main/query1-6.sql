SELECT film.title FROM film
WHERE film.film_id NOT IN (SELECT film_id FROM inventory);