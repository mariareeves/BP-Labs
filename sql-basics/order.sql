-- create table order
CREATE TABLE order (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(50),
    product_price INTEGER,
    quantity INTEGER
)

-- insert multiple order
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'iPhone 12', 999, 1),(1, 'Samsung Galaxy S21', 899.99, 2),(2, 'Sony PlayStation 5',500, 1),(3, 'Nintendo Switch', 200, 3),(4, 'Bose QuietComfort 35 II', 350, 1);

-- select all the record from the orders table
-- SELECT * FROM orders;

--calculate the total numbers of products ordered
-- SELECT sum(quantity) from orders;

--calculate the totla order price 
-- SELECT sum(product_price * quantity) from orders;

--calculate the total order price by a single person_id
-- SELECT person_id, sum(product_price * quantity) from orders where person_id = person_id group by person_id