SELECT actor.first_name, actor.last_name, COUNT(film_actor.film_id) AS number_films
FROM actor
INNER JOIN film_actor ON film_actor.actor_id = actor.actor_id
GROUP BY actor.actor_id;