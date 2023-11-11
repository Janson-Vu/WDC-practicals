SELECT SUM(film.length)
FROM film
INNER JOIN film_actor ON film_actor.film_id = film.film_id
WHERE film_actor.actor_id
IN (SELECT actor.actor_id FROM actor WHERE actor.first_name = 'ANGELA' && actor.last_name = 'WITHERSPOON');

-- FROM actor
-- INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id
-- INNER JOIN film ON film_actor.film_id = film.film_id
-- WHERE actor.first_name = 'ANGELA' && actor.last_name = 'WITHERSPOON';